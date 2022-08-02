import { BigNumberish } from "ethers";
import { NFTMetadataOwner } from "../../schema";
import { ClaimVerification } from "../../types";
import { BaseClaimConditionERC721 } from "../../types/eips";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { IStorage } from "../interfaces/IStorage";
import { TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { DropClaimConditions } from "./drop-claim-conditions";
import { Erc721 } from "./erc-721";
/**
 * Lazily mint and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.drop.claim.to("0x...", quantity);
 * ```
 */
export declare class Erc721Claimable implements DetectableFeature {
    featureName: "ERC721ClaimConditions";
    /**
     * Configure claim conditions
     * @remarks Define who can claim NFTs in the collection, when and how many.
     * @example
     * ```javascript
     * const presaleStartTime = new Date();
     * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const claimConditions = [
     *   {
     *     startTime: presaleStartTime, // start the presale now
     *     maxQuantity: 2, // limit how many mints for this presale
     *     price: 0.01, // presale price
     *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
     *   },
     *   {
     *     startTime: publicSaleStartTime, // 24h after presale, start public sale
     *     price: 0.08, // public sale price
     *   }
     * ]);
     * await contract.nft.drop.claim.conditions.set(claimConditions);
     * ```
     */
    conditions: DropClaimConditions<BaseClaimConditionERC721>;
    private contractWrapper;
    private erc721;
    private storage;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<BaseClaimConditionERC721>, storage: IStorage);
    /**
     * Claim unique NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 1; // how many unique NFTs you want to claim
     *
     * const tx = await contract.nft.drop.claim.to(address, quantity);
     * const receipt = tx[0].receipt; // the transaction receipt
     * const claimedTokenId = tx[0].id; // the id of the first NFT claimed
     * const claimedNFT = await tx[0].data(); // (optional) get the first claimed NFT metadata
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param quantity - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     * @param claimData - Optional claim verification data (e.g. price, allowlist proof, etc...)
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    to(destinationAddress: string, quantity: BigNumberish, checkERC20Allowance?: boolean, claimData?: ClaimVerification): Promise<TransactionResultWithId<NFTMetadataOwner>[]>;
}
