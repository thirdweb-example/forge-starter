import { BaseContract, ethers } from "ethers";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { IStorage } from "../core";
import { AbiFunction, AbiSchema, ContractSource, PreDeployMetadataFetched, PublishedMetadata } from "../schema/contracts/custom";
import { z } from "zod";
import { Feature, FeatureName, FeatureWithEnabled } from "../constants/contract-features";
/**
 * @internal
 */
export declare function extractConstructorParams(predeployMetadataUri: string, storage: IStorage): Promise<{
    [x: string]: any;
    components?: {
        [x: string]: any;
        type: string;
        name: string;
    }[] | undefined;
    stateMutability?: string | undefined;
    type: string;
    name: string;
}[]>;
/**
 * @internal
 * @param predeployMetadataUri
 * @param storage
 */
export declare function extractFunctions(predeployMetadataUri: string, storage: IStorage): Promise<AbiFunction[]>;
/**
 *
 * @param abi
 * @returns
 * @internal
 */
export declare function extractConstructorParamsFromAbi(abi: z.input<typeof AbiSchema>): {
    [x: string]: any;
    components?: {
        [x: string]: any;
        type: string;
        name: string;
    }[] | undefined;
    stateMutability?: string | undefined;
    type: string;
    name: string;
}[];
/**
 * @internal
 * @param abi
 * @param metadata
 */
export declare function extractFunctionsFromAbi(abi: z.input<typeof AbiSchema>, metadata?: Record<string, any>): AbiFunction[];
/**
 * @internal
 * @param address
 * @param provider
 */
export declare function resolveContractUriFromAddress(address: string, provider: ethers.providers.Provider): Promise<string | undefined>;
/**
 * @internal
 * @param address
 * @param provider
 * @param storage
 */
export declare function fetchContractMetadataFromAddress(address: string, provider: ethers.providers.Provider, storage: IStorage): Promise<{
    name: string;
    metadata: Record<string, any>;
    abi: {
        [x: string]: any;
        type: string;
        name: string;
        outputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
        inputs: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[];
    }[];
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    licenses: string[];
}>;
/**
 * @internal
 * @param compilerMetadataUri
 * @param storage
 */
export declare function fetchContractMetadata(compilerMetadataUri: string, storage: IStorage): Promise<PublishedMetadata>;
/**
 * @internal
 * @param publishedMetadata
 * @param storage
 */
export declare function fetchSourceFilesFromMetadata(publishedMetadata: PublishedMetadata, storage: IStorage): Promise<ContractSource[]>;
/**
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
export declare function fetchRawPredeployMetadata(publishMetadataUri: string, storage: IStorage): Promise<{
    [x: string]: any;
    name: string;
    metadataUri: string;
    bytecodeUri: string;
}>;
/**
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
export declare function fetchPreDeployMetadata(publishMetadataUri: string, storage: IStorage): Promise<PreDeployMetadataFetched>;
/**
 * Processes ALL supported features and sets whether the passed in abi supports each individual feature
 * @internal
 * @param abi
 * @param features
 * @returns the nested struct of all features and whether they're detected in the abi
 */
export declare function detectFeatures(abi: z.input<typeof AbiSchema>, features?: Record<string, Feature>): Record<string, FeatureWithEnabled>;
/**
 * Checks whether the given ABI supports a given feature
 * @internal
 * @param abi
 * @param featureName
 */
export declare function isFeatureEnabled(abi: z.input<typeof AbiSchema>, featureName: FeatureName): boolean;
/**
 * Type guard for contractWrappers depending on passed feature name
 * @internal
 * @param contractWrapper
 * @param featureName
 */
export declare function detectContractFeature<T extends BaseContract>(contractWrapper: ContractWrapper<BaseContract>, featureName: FeatureName): contractWrapper is ContractWrapper<T>;
/**
 * @internal
 * @param contractWrapper
 * @param functionName
 */
export declare function hasFunction<TContract extends BaseContract>(functionName: string, contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<TContract>;
