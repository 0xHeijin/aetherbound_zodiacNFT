import { ConnectButton } from '@mysten/dapp-kit'
import { MintButton } from './components/MintButton'
import { WalletInfo } from './components/WalletInfo'
import './App.css'

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>♈ Aetherbound Zodiac ♈</h1>
        <p className="subtitle">NFT Collection on Sui Blockchain</p>
      </div>

      <div className="wallet-section">
        <ConnectButton />
        <WalletInfo />
      </div>

      <div className="mint-section">
        <MintButton />
      </div>
    </div>
  )
}




