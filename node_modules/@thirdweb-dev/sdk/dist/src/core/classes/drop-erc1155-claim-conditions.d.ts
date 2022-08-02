import { IStorage } from "../interfaces/IStorage";
import { DropErc721ContractSchema } from "../../schema/contracts/drop-erc721";
import { ContractMetadata } from "./contract-metadata";
import { DropERC1155 } from "contracts";
import { BigNumberish, ethers } from "ethers";
import { ContractWrapper } from "./contract-wrapper";
import { ClaimCondition, ClaimConditionInput, ClaimConditionsForToken } from "../../types";
import { ClaimEligibility } from "../../enums";
import { TransactionResult } from "../index";
/**
 * Manages claim conditions for Edition Drop contracts
 * @public
 */
export declare class DropErc1155ClaimConditions {
    private contractWrapper;
    private metadata;
    private storage;
    constructor(contractWrapper: ContractWrapper<DropERC1155>, metadata: ContractMetadata<DropERC1155, typeof DropErc721ContractSchema>, storage: IStorage);
    /** ***************************************
     * READ FUNCTIONS
     *****************************************/
    /**
     * Get the currently active claim condition
     *
     * @returns the claim condition metadata
     */
    getActive(tokenId: BigNumberish): Promise<ClaimCondition>;
    /**
     * Get all the claim conditions
     *
     * @returns the claim conditions metadata
     */
    getAll(tokenId: BigNumberish): Promise<ClaimCondition[]>;
    /**
     * Can Claim
     *
     * @remarks Check if a particular NFT can currently be claimed by a given user.
     *
     * @example
     * ```javascript
     * // Quantity of tokens to check claimability of
     * const quantity = 1;
     * const canClaim = await contract.canClaim(quantity);
     * ```
     */
    canClaim(tokenId: BigNumberish, quantity: BigNumberish, addressToCheck?: string): Promise<boolean>;
    /**
     * For any claim conditions that a particular wallet is violating,
     * this function returns human-readable information about the
     * breaks in the condition that can be used to inform the user.
     *
     * @param tokenId - the token id to check
     * @param quantity - The desired quantity that would be claimed.
     * @param addressToCheck - The wallet address, defaults to the connected wallet.
     *
     */
    getClaimIneligibilityReasons(tokenId: BigNumberish, quantity: BigNumberish, addressToCheck?: string): Promise<ClaimEligibility[]>;
    /** ***************************************
     * WRITE FUNCTIONS
     *****************************************/
    /**
     * Set claim conditions on a single NFT
     *
     * @remarks Sets the public mint conditions that need to be fulfilled by users to claim a particular NFT in this contract.
     *
     * @example
     * ```javascript
     * const presaleStartTime = new Date();
     * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     *
     * // Optionally specify addresses that can claim
     * const snapshots = ['0x...', '0x...']
     *
     * // Or alternatively, you can pass snapshots with the max number of NFTs each address can claim
     * // const snapshots = [{ address: '0x...', maxClaimable: 1 }, { address: '0x...', maxClaimable: 2 }]
     *
     * const claimConditions = [
     *   {
     *     startTime: presaleStartTime, // start the presale now
     *     maxQuantity: 2, // limit how many mints for this presale
     *     price: 0.01, // presale price
     *     snapshot: snapshots, // limit minting to only certain addresses
     *   },
     *   {
     *     startTime: publicSaleStartTime, // 24h after presale, start public sale
     *     price: 0.08, // public sale price
     *   }
     * ]);
     *
     * const tokenId = 0; // the id of the NFT to set claim conditions on
     * await dropContract.claimConditions.set(tokenId, claimConditions);
     * ```
     *
     * @param tokenId - The id of the NFT to set the claim conditions on
     * @param claimConditionInputs - The claim conditions
     * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
     */
    set(tokenId: BigNumberish, claimConditionInputs: ClaimConditionInput[], resetClaimEligibilityForAll?: boolean): Promise<TransactionResult>;
    /**
     * Set claim conditions on multiple NFTs at once
     *
     * @remarks Sets the claim conditions that need to be fulfilled by users to claim the given NFTs in this contract.
     *
     * @example
     * ```javascript
     * const claimConditionsForTokens = [
     *   {
     *     tokenId: 0,
     *     claimConditions: [{
     *       startTime: new Date(), // start the claim phase now
     *       maxQuantity: 2, // limit how many mints for this tokenId
     *       price: 0.01, // price for this tokenId
     *       snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
     *     }]
     *   },
     *   {
     *     tokenId: 1,
     *     claimConditions: [{
     *       startTime: new Date(),
     *       price: 0.08, // different price for this tokenId
     *     }]
     *   },
     * ];
     *
     * await dropContract.claimConditions.setBatch(claimConditionsForTokens);
     * ```
     *
     * @param claimConditionsForToken - The claim conditions for each NFT
     * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
     */
    setBatch(claimConditionsForToken: ClaimConditionsForToken[], resetClaimEligibilityForAll?: boolean): Promise<{
        receipt: ethers.providers.TransactionReceipt;
    }>;
    /**
     * Update a single claim condition with new data.
     * @param tokenId - the token id to update
     * @param index - the index of the claim condition to update, as given by the index from the result of `getAll()`
     * @param claimConditionInput - the new data to update, previous data will be retained
     */
    update(tokenId: BigNumberish, index: number, claimConditionInput: ClaimConditionInput): Promise<TransactionResult>;
}
