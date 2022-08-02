import { IStorage } from "../interfaces/IStorage";
import { FileOrBuffer, JsonObject } from "../types";
import { UploadProgressEvent } from "../../types/events";
import { IStorageUpload, UploadResult } from "../interfaces";
/**
 * IPFS Storage implementation, accepts custom IPFS gateways
 * @remarks By default, thirdweb automatically uploads files to IPFS when you perform operations such as minting, this class allows you to do it manually.
 * @public
 */
export declare class IpfsStorage implements IStorage {
    /**
     * {@inheritdoc IStorage.gatewayUrl}
     * @internal
     */
    gatewayUrl: string;
    private failedUrls;
    private uploader;
    constructor(gatewayUrl?: string, uploader?: IStorageUpload);
    private getNextPublicGateway;
    /**
     * Upload a file to IPFS and return the hash
     * @remarks This method is a wrapper around {@link IStorage.upload}
     * @example
     * ```javascript
     * const file = './path/to/file.png'; // Can be a path or a File object such as a file from an input element.
     * const hash = await sdk.storage.upload(file);
     * ```
     *
     *
     */
    upload(data: string | FileOrBuffer, contractAddress?: string, signerAddress?: string, options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<string>;
    /**
     * {@inheritDoc IStorage.uploadBatch}
     */
    uploadBatch(files: (string | FileOrBuffer)[], fileStartNumber?: number, contractAddress?: string, signerAddress?: string, options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<{
        baseUri: string;
        uris: string[];
    }>;
    /**
     * {@inheritDoc IStorage.get}
     */
    get(hash: string): Promise<Record<string, any>>;
    /**
     * {@inheritDoc IStorage.getRaw}
     */
    getRaw(hash: string): Promise<string>;
    /**
     * {@inheritDoc IStorage.uploadMetadata}
     */
    uploadMetadata(metadata: JsonObject, contractAddress?: string, signerAddress?: string, options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<string>;
    /**
     * {@inheritDoc IStorage.uploadMetadataBatch}
     */
    uploadMetadataBatch(metadatas: JsonObject[], fileStartNumber?: number, contractAddress?: string, signerAddress?: string, options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<UploadResult>;
    /** *************************
     * PRIVATE FUNCTIONS
     *************************/
    private _get;
    /**
     * Pre-processes metadata and uploads all file properties
     * to storage in *bulk*, then performs a string replacement of
     * all file properties -\> the resulting ipfs uri. This is
     * called internally by `uploadMetadataBatch`.
     *
     * @internal
     *
     * @returns - The processed metadata with properties pointing at ipfs in place of `File | Buffer`
     * @param metadatas
     * @param options
     */
    private batchUploadProperties;
    /**
     * This function recurisely traverses an object and hashes any
     * `Buffer` or `File` objects into the returned map.
     *
     * @param object - the Json Object
     * @param files - The running array of files or buffer to upload
     * @returns - The final map of all hashes to files
     */
    private buildFilePropertiesMap;
    /**
     * FOR TESTING ONLY
     * @internal
     * @param data -
     * @param contractAddress -
     * @param signerAddress -
     */
    uploadSingle(data: string | Record<string, any>, contractAddress?: string, signerAddress?: string): Promise<string>;
}
