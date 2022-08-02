import { ContractWrapper } from "../core/classes/contract-wrapper";
import { ContractInterceptor } from "../core/classes/contract-interceptor";
import { IStorage } from "../core/interfaces/IStorage";
import { NetworkOrSignerOrProvider, TransactionResultWithId } from "../core/types";
import { ContractMetadata } from "../core/classes/contract-metadata";
import { ContractEncoder } from "../core/classes/contract-encoder";
import { SDKOptions } from "../schema/sdk-options";
import { Pack as PackContract } from "contracts";
import { ContractRoles } from "../core/classes/contract-roles";
import { ContractRoyalty } from "../core/classes/contract-royalty";
import { Erc1155 } from "../core/classes/erc-1155";
import { GasCostEstimator } from "../core/classes/gas-cost-estimator";
import { ContractEvents } from "../core/classes/contract-events";
import { PackMetadataInput, PackRewards, PackRewardsOutput } from "../schema/tokens/pack";
import { BigNumber, BigNumberish } from "ethers";
import { EditionMetadata, EditionMetadataOwner } from "../schema";
import { QueryAllParams } from "../types";
/**
 * Create lootboxes of NFTs with rarity based open mechanics.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = sdk.getPack("{{contract_address}}");
 * ```
 *
 * @public
 */
export declare class Pack extends Erc1155<PackContract> {
    static contractType: "pack";
    static contractRoles: readonly ["admin", "minter", "pauser", "transfer"];
    static contractAbi: any;
    /**
     * @internal
     */
    static schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../core/types").Json, import("zod").ZodTypeDef, import("../core/types").Json>>, {
            [x: string]: import("../core/types").Json;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            [x: string]: import("../core/types").Json;
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
    };
    metadata: ContractMetadata<PackContract, typeof Pack.schema>;
    roles: ContractRoles<PackContract, typeof Pack.contractRoles[number]>;
    encoder: ContractEncoder<PackContract>;
    events: ContractEvents<PackContract>;
    estimator: GasCostEstimator<PackContract>;
    /**
     * Configure royalties
     * @remarks Set your own royalties for the entire contract or per pack
     * @example
     * ```javascript
     * // royalties on the whole contract
     * contract.royalties.setDefaultRoyaltyInfo({
     *   seller_fee_basis_points: 100, // 1%
     *   fee_recipient: "0x..."
     * });
     * // override royalty for a particular pack
     * contract.royalties.setTokenRoyaltyInfo(packId, {
     *   seller_fee_basis_points: 500, // 5%
     *   fee_recipient: "0x..."
     * });
     * ```
     */
    royalties: ContractRoyalty<PackContract, typeof Pack.schema>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<PackContract>;
    private _query;
    constructor(network: NetworkOrSignerOrProvider, address: string, storage: IStorage, options?: SDKOptions, contractWrapper?: ContractWrapper<PackContract>);
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get All Packs
     *
     * @remarks Get all the data associated with every pack in this contract.
     *
     * By default, returns the first 100 packs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const packs = await contract.getAll();
     * console.log(packs;
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The pack metadata for all packs queried.
     */
    getAll(queryParams?: QueryAllParams): Promise<EditionMetadata[]>;
    /**
     * Get Owned Packs
     *
     * @remarks Get all the data associated with the packs owned by a specific wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to get the packs of
     * const address = "{{wallet_address}}";
     * const packss = await contract.getOwned(address);
     * ```
     *
     * @returns The pack metadata for all the owned packs in the contract.
     */
    getOwned(walletAddress?: string): Promise<EditionMetadataOwner[]>;
    /**
     * Get the number of packs created
     * @returns the total number of packs minted in this contract
     * @public
     */
    getTotalCount(): Promise<BigNumber>;
    /**
     * Get whether users can transfer packs from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /**
     * Get Pack Contents
     * @remarks Get the rewards contained inside a pack.
     *
     * @param packId - The id of the pack to get the contents of.
     * @returns - The contents of the pack.
     *
     * @example
     * ```javascript
     * const packId = 0;
     * const contents = await contract.getPackContents(packId);
     * console.log(contents.erc20Rewards);
     * console.log(contents.erc721Rewards);
     * console.log(contents.erc1155Rewards);
     * ```
     */
    getPackContents(packId: BigNumberish): Promise<PackRewardsOutput>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create Pack
     * @remarks Create a new pack with the given metadata and rewards and mint it to the connected wallet.
     * @remarks See {@link Pack.createTo}
     *
     * @param metadataWithRewards - the metadata and rewards to include in the pack
     * @example
     * ```javascript
     * const pack = {
     *   // The metadata for the pack NFT itself
     *   packMetadata: {
     *     name: "My Pack",
     *     description: "This is a new pack",
     *     image: "ipfs://...",
     *   },
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
     *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
     * }
     *
     * const tx = await contract.create(pack);
     * ```
     */
    create(metadataWithRewards: PackMetadataInput): Promise<TransactionResultWithId<{
        metadata: {
            [x: string]: import("../core/types").Json;
            name?: string | undefined;
            description?: string | null | undefined;
            image?: string | null | undefined;
            external_url?: string | null | undefined;
            animation_url?: string | null | undefined;
            uri: string;
            id: BigNumber;
        };
        supply: BigNumber;
    }>>;
    /**
     * Create Pack To Wallet
     * @remarks Create a new pack with the given metadata and rewards and mint it to the specified address.
     *
     * @param to - the address to mint the pack to
     * @param metadataWithRewards - the metadata and rewards to include in the pack
     *
     * @example
     * ```javascript
     * const pack = {
     *   // The metadata for the pack NFT itself
     *   packMetadata: {
     *     name: "My Pack",
     *     description: "This is a new pack",
     *     image: "ipfs://...",
     *   },
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
     *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
     * }
     *
     * const tx = await contract.createTo("0x...", pack);
     * ```
     */
    createTo(to: string, metadataWithRewards: PackMetadataInput): Promise<TransactionResultWithId<EditionMetadata>>;
    /**
     * Open Pack
     *
     * @remarks - Open a pack to reveal the contained rewards. This will burn the specified pack and
     * the contained assets will be transferred to the opening users wallet.
     *
     * @param tokenId - the token ID of the pack you want to open
     * @param amount - the amount of packs you want to open
     *
     * @example
     * ```javascript
     * const tokenId = 0
     * const amount = 1
     * const tx = await contract.open(tokenId, amount);
     * ```
     */
    open(tokenId: BigNumberish, amount?: BigNumberish): Promise<PackRewards>;
    /** *****************************
     * PRIVATE FUNCTIONS
     *******************************/
    private toPackContentArgs;
}
