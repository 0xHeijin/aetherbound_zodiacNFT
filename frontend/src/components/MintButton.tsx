import { useSignAndExecuteTransaction, useCurrentAccount } from '@mysten/dapp-kit'
import { Transaction } from '@mysten/sui/transactions'
import { useState } from 'react'
import { CONFIG } from '../config'

export function MintButton() {
  const account = useCurrentAccount()
  const { mutate: signAndExecute } = useSignAndExecuteTransaction()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: CONFIG.nft.name,
    description: CONFIG.nft.description,
    metadataUrl: CONFIG.nft.metadataUrl,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!account) {
      setError('Please connect your wallet first')
      return
    }

    if (!CONFIG.packageId || CONFIG.packageId === '0x0000000000000000000000000000000000000000000000000000000000000000') {
      setError('❌ Package ID not configured. Please update config.ts with the deployed package ID.')
      return
    }

    if (!formData.name.trim() || !formData.description.trim()) {
      setError('❌ Please fill in all fields')
      return
    }

    try {
      setLoading(true)
      setError(null)
      setResult(null)

      const tx = new Transaction()

      // Call the mint function from the Move contract
      tx.moveCall({
        target: `${CONFIG.packageId}::${CONFIG.moduleName}::${CONFIG.functionName}`,
        arguments: [
          tx.pure.string(formData.name),
          tx.pure.string(formData.description),
          tx.pure.string(formData.metadataUrl),
        ],
      })

      await signAndExecute(
        { transaction: tx as any },
        {
          onSuccess: (data) => {
            setResult(`✅ NFT "${formData.name}" minted successfully!`)
            setFormData({
              name: CONFIG.nft.name,
              description: CONFIG.nft.description,
              metadataUrl: CONFIG.nft.metadataUrl,
            })
            console.log('Transaction:', data)
          },
          onError: (error) => {
            setError(`❌ Transaction failed: ${error.message}`)
            console.error('Error:', error)
          },
        }
      )
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error'
      setError(`❌ Error: ${errorMsg}`)
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#a78bfa' }}>Mint Your Zodiac NFT</h2>
      <form onSubmit={handleMint} className="mint-form">
        <div className="form-group">
          <label htmlFor="name">NFT Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g., Aries"
            disabled={loading}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="e.g., The fire-born sign of initiative"
            rows={4}
            disabled={loading}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="metadataUrl">Metadata URL</label>
          <input
            id="metadataUrl"
            type="url"
            name="metadataUrl"
            value={formData.metadataUrl}
            onChange={handleInputChange}
            placeholder="https://example.com/metadata"
            disabled={loading}
            required
          />
        </div>

        <button
          type="submit"
          disabled={!account || loading}
          className="mint-button"
        >
          {loading ? (
            <>
              <span className="spinner"></span> Minting...
            </>
          ) : (
            '✨ Mint NFT'
          )}
        </button>

        {result && <div className="status-message success">{result}</div>}
        {error && <div className="status-message error">{error}</div>}
      </form>
    </div>
  )
}
