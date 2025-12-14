# Aetherbound Zodiac NFT

Uma coleção de NFTs dos signos do zodíaco na blockchain Sui.

## 🎨 Sobre o Projeto

Aetherbound Zodiac é uma coleção de NFTs que representa os 12 signos do zodíaco, publicada na blockchain Sui com suporte completo para customização e metadados.

## 📦 Informações do Package

- **Network**: Mainnet
- **Package ID**: `0xbaeb8b9702e516d5726bc7a62dcf999859c1341c8bc784e41ac7219d98c78ffa`
- **Module**: `aetherbound::zodiac`
- **Status**: ✅ Publicado e Testado

## 🚀 Funcionalidades

### Smart Contract (Move)

- **mint()** - Mintar novo NFT com nome, descrição e metadata URL
- **get_name()** - Obter o nome do NFT
- **get_description()** - Obter a descrição do NFT
- **get_metadata_url()** - Obter a URL dos metadados

### Frontend (React + Vite)

- Interface moderna e responsiva
- Conectar carteira Sui
- Formulário interativo para customizar NFTs
- Feedback em tempo real (sucesso/erro)
- Dark mode com design profissional

## 🌐 Links Importantes

- **dApp (Produção)**: https://aetherbound-zodiac-7c8ifnv7x-heijins-projects.vercel.app
- **Repositório**: https://github.com/0xHeijin/aetherbound_zodiacNFT
- **Explorer**: https://suiscan.xyz/mainnet

## 📋 Estrutura do Projeto

```
aetherbound_zodiacNFT/
├── aetherbound_zodiac/
│   ├── sources/
│   │   └── aetherbound_zodiac.move
│   ├── tests/
│   └── Move.toml
├── frontend/
│   ├── src/
│   └── package.json
└── Move.registry.yaml
```

## 🛠️ Como Usar

### Rodar Localmente

```bash
git clone https://github.com/0xHeijin/aetherbound_zodiacNFT
cd aetherbound_zodiacNFT/frontend
npm install
npm run dev
```

## 👤 Autor

**0xHeijin** - Desenvolvedor Sui Move & Web3

**Desenvolvido para o Bootcamp Sui Move** ✨
