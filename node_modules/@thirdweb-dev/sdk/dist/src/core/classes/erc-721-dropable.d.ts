import { NFTMetadata, NFTMetadataInput } from "../../schema";
import { UploadProgressEvent } from "../../types";
import { BaseDelayedRevealERC721, BaseDropERC721 } from "../../types/eips";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { IStorage } from "../interfaces/IStorage";
import { TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Erc721 } from "./erc-721";
import { DelayedReveal } from "./delayed-reveal";
import { Erc721Claimable } from "./erc-721-claimable";
/**
 * Lazily mint and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.drop.claim(quantity);
 * ```
 */
export declare class Erc721Dropable implements DetectableFeature {
    featureName: "ERC721Dropable";
    revealer: DelayedReveal<BaseDelayedRevealERC721> | undefined;
    /**
     * Claim tokens and configure claim conditions
     * @remarks Let users claim NFTs. Define who can claim NFTs in the collection, when and how many.
     * @example
     * ```javascript
     * const quantity = 10;
     * await contract.nft.drop.claim.to("0x...", quantity);
     * ```
     */
    claim: Erc721Claimable | undefined;
    private contractWrapper;
    private erc721;
    private storage;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<BaseDropERC721>, storage: IStorage);
    /**
     * Create a batch of unique NFTs to be claimed in the future
     *
     * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
     *
     * @example
     * ```javascript
     * // Custom metadata of the NFTs to create
     * const metadatas = [{
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"),
     * }];
     *
     * const results = await contract.nft.lazy.mint(metadatas); // uploads and creates the NFTs on chain
     * const firstTokenId = results[0].id; // token id of the first created NFT
     * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
     * ```
     *
     * @param metadatas - The metadata to include in the batch.
     * @param options - optional upload progress callback
     */
    lazyMint(metadatas: NFTMetadataInput[], options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<TransactionResultWithId<NFTMetadata>[]>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    private detectErc721Revealable;
    private detectErc721Claimable;
}
