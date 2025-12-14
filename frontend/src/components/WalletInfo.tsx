import { useCurrentAccount, useDisconnectWallet } from '@mysten/dapp-kit'

export function WalletInfo() {
  const account = useCurrentAccount()
  const { mutate: disconnect } = useDisconnectWallet()

  if (!account) {
    return (
      <div className="wallet-section">
        <p className="no-wallet">No wallet connected</p>
      </div>
    )
  }

  const shortAddress = `${account.address.slice(0, 6)}...${account.address.slice(-4)}`

  return (
    <div className="wallet-section">
      <div className="wallet-info">
        <p className="wallet-label">Connected Wallet:</p>
        <p className="wallet-address">{shortAddress}</p>
        <p className="wallet-full" title={account.address}>
          Full: {account.address}
        </p>
      </div>
      <button onClick={() => disconnect()} className="disconnect-button">
        Disconnect
      </button>
    </div>
  )
}
