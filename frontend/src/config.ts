// Configuration for the Aetherbound Zodiac dApp
export const CONFIG = {
  // Network configuration
  network: 'mainnet' as const,
  rpcUrl: 'https://fullnode.mainnet.sui.io:443',
  
  // Smart Contract Details
  packageId: '0xbaeb8b9702e516d5726bc7a62dcf999859c1341c8bc784e41ac7219d98c78ffa', // Mainnet Package ID
  moduleName: 'zodiac',
  functionName: 'mint',
  
  // NFT Details
  nft: {
    name: 'Aries',
    description: 'The fire-born sign of initiative',
    metadataUrl: 'https://example.com/aries-metadata',
  },
}
