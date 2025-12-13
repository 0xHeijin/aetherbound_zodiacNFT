module aetherbound::zodiac {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;
    use sui::event;
    use std::string::String;

    /// NFT individual da coleção Aetherbound: Zodiac
    struct ZodiacNFT has key {
        id: UID,
        name: String,           // Ex: "Aetherbound: Aries"
        description: String,    // Ex: "The fire-born sign of initiative"
        metadata_url: String,   // Link para imagem + metadata
    }

    /// Evento emitido quando um NFT é criado
    struct ZodiacNFTMinted has copy, drop {
        nft_id: address,
        name: String,
        creator: address,
    }

    /// Cria (mint) um novo NFT
    public fun mint(
        name: String,
        description: String,
        metadata_url: String,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        let nft_id = object::new(ctx);
        
        let nft = ZodiacNFT {
            id: nft_id,
            name: name,
            description,
            metadata_url,
        };

        // Emite evento de minting
        event::emit(ZodiacNFTMinted {
            nft_id: object::id_address(&nft),
            name: name,
            creator: sender,
        });

        // Envia o NFT para quem chamou a função
        transfer::transfer(nft, sender);
    }

    /// Retorna os detalhes do NFT
    public fun get_name(nft: &ZodiacNFT): &String {
        &nft.name
    }

    public fun get_description(nft: &ZodiacNFT): &String {
        &nft.description
    }

    public fun get_metadata_url(nft: &ZodiacNFT): &String {
        &nft.metadata_url
    }
}



