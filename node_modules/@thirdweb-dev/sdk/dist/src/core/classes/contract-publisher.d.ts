import { NetworkOrSignerOrProvider, TransactionResult } from "../types";
import { SDKOptions } from "../../schema/sdk-options";
import { IStorage } from "../interfaces";
import { RPCConnectionHandler } from "./rpc-connection-handler";
import { BytesLike, ContractInterface } from "ethers";
import { AbiFunction, ContractParam, ContractSource, ExtraPublishMetadata, FullPublishMetadata, PreDeployMetadataFetched, ProfileMetadata, ProfileMetadataInput, PublishedContract, PublishedContractFetched } from "../../schema/contracts/custom";
/**
 * Handles publishing contracts (EXPERIMENTAL)
 * @internal
 */
export declare class ContractPublisher extends RPCConnectionHandler {
    private storage;
    private publisher;
    constructor(network: NetworkOrSignerOrProvider, options: SDKOptions, storage: IStorage);
    updateSignerOrProvider(network: NetworkOrSignerOrProvider): void;
    /**
     * @internal
     * @param metadataUri
     */
    extractConstructorParams(metadataUri: string): Promise<ContractParam[]>;
    /**
     * @internal
     * @param predeployMetadataUri
     */
    extractFunctions(predeployMetadataUri: string): Promise<AbiFunction[]>;
    /**
     * @internal
     * @param predeployUri
     */
    fetchCompilerMetadataFromPredeployURI(predeployUri: string): Promise<PreDeployMetadataFetched>;
    /**
     * @internal
     * @param prepublishUri
     * @param publisherAddress
     */
    fetchPrePublishMetadata(prepublishUri: string, publisherAddress: string): Promise<{
        preDeployMetadata: PreDeployMetadataFetched;
        latestPublishedContractMetadata?: PublishedContractFetched;
    }>;
    /**
     * @internal
     * @param address
     */
    fetchCompilerMetadataFromAddress(address: string): Promise<{
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
     * Get the full information about a published contract
     * @param contract
     */
    fetchPublishedContractInfo(contract: PublishedContract): Promise<PublishedContractFetched>;
    /**
     * @internal
     * @param publishedMetadataUri
     */
    fetchPublishedMetadata(publishedMetadataUri: string): Promise<FullPublishMetadata>;
    /**
     * @internal
     * // TODO expose a resolvePublishMetadata(contractAddress, chainId) that handles the dual chain case
     * // TODO will be easy to do with the multichain pattern of 3.0
     * @param compilerMetadataUri
     */
    resolvePublishMetadataFromCompilerMetadata(compilerMetadataUri: string): Promise<FullPublishMetadata[]>;
    /**
     * @internal
     * @param address
     */
    fetchContractSourcesFromAddress(address: string): Promise<ContractSource[]>;
    /**
     * @internal
     * @param profileMetadata
     */
    updatePublisherProfile(profileMetadata: ProfileMetadataInput): Promise<TransactionResult>;
    /**
     * @internal
     * @param publisherAddress
     */
    getPublisherProfile(publisherAddress: string): Promise<ProfileMetadata>;
    /**
     * @internal
     * @param publisherAddress
     */
    getAll(publisherAddress: string): Promise<PublishedContract[]>;
    /**
     * @internal
     * @param publisherAddress
     * @param contractId
     */
    getAllVersions(publisherAddress: string, contractId: string): Promise<PublishedContract[]>;
    getLatest(publisherAddress: string, contractId: string): Promise<PublishedContract>;
    publish(predeployUri: string, extraMetadata: ExtraPublishMetadata): Promise<TransactionResult<PublishedContract>>;
    unpublish(publisher: string, contractId: string): Promise<TransactionResult>;
    /**
     * @internal
     * @param publisherAddress
     * @param contractId
     * @param constructorParamValues
     * @param contractMetadata
     */
    deployPublishedContract(publisherAddress: string, contractId: string, constructorParamValues: any[]): Promise<string>;
    /**
     * @internal
     * @param publishMetadataUri
     * @param constructorParamValues
     */
    deployContract(publishMetadataUri: string, constructorParamValues: any[]): Promise<string>;
    private convertParamValues;
    /**
     * @internal
     * @param abi
     * @param bytecode
     * @param constructorParams
     */
    deployContractWithAbi(abi: ContractInterface, bytecode: BytesLike | {
        object: string;
    }, constructorParams: Array<any>): Promise<string>;
    private toPublishedContract;
}
