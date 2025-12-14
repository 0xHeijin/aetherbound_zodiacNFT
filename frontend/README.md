# Aetherbound Zodiac Frontend

Simple NFT minting frontend for the Aetherbound Zodiac project on Sui Devnet.

## Features

✨ **Wallet Connection** - Connect your Sui wallet  
⭐ **Mint Aries NFT** - Call the Move contract to mint NFTs  
🔍 **Wallet Info** - View connected address  
🎨 **Clean Dark UI** - Simple and modern design  

## Setup

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Update Configuration

Before running the dApp, you need to:

1. Deploy your Move contract to Sui Devnet:
   ```bash
   cd aetherbound_zodiac
   sui move publish --gas-budget 100000000
   ```

2. Copy the **Immutable Package ID** from the output

3. Update `src/config.ts` with your Package ID:
   ```typescript
   packageId: 'YOUR_PACKAGE_ID_HERE',
   ```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## How It Works

1. **Connect Wallet** - Click "Connect Wallet" and select your Sui wallet
2. **View Account** - See your connected wallet address
3. **Mint NFT** - Click "Mint Aries NFT" to call the Move contract
4. **View Result** - See transaction status and confirmation

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── MintButton.tsx      # Minting functionality
│   │   └── WalletInfo.tsx      # Wallet display
│   ├── App.tsx                 # Main app component
│   ├── config.ts               # Configuration
│   ├── main.tsx                # React entry point
│   └── index.css               # Styling
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html
```

## Configuration

Edit `src/config.ts` to customize:

- `packageId` - Your deployed contract's package ID
- `moduleName` - The Move module name (default: "zodiac")
- `functionName` - The function to call (default: "mint")
- `nft` - NFT metadata (name, description, metadata URL)
- `network` - Network to use (devnet, testnet, mainnet)

## Technologies

- **Vite** - Fast build tool
- **React 18** - UI framework
- **TypeScript** - Type safety
- **@mysten/dapp-kit** - Sui wallet integration
- **@mysten/sui.js** - Sui blockchain interaction

## Testing

Make sure you have:
- ✅ Sui Wallet extension installed
- ✅ Connected to Devnet
- ✅ Some SUI for gas fees
- ✅ Contract deployed with correct Package ID

## Troubleshooting

**"Please connect your wallet"**
- Install Sui Wallet extension
- Switch to Devnet in wallet settings

**"Transaction failed"**
- Check you have SUI tokens for gas
- Verify Package ID is correct in config.ts
- Check contract is deployed

**Port 5173 already in use**
- Change port in `vite.config.ts`
- Or kill process: `lsof -ti :5173 | xargs kill -9`

## License

Beginner Web3 Project for Certification
