module aetherbound::zodiac {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;
    use sui::event;
    use std::string::String;

    /// NFT individual da coleção Aetherbound: Zodiac
    struct ZodiacNFT has key, store {
        id: UID,
        name: String,
        description: String,
        metadata_url: String,
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

        let id = object::new(ctx);
        let nft_address = object::uid_to_address(&id);

        let nft = ZodiacNFT {
            id,
            name,
            description,
            metadata_url,
        };

        event::emit(ZodiacNFTMinted {
            nft_id: nft_address,
            name,
            creator: sender,
        });

        transfer::transfer(nft, sender);
    }

    /// Getters
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
