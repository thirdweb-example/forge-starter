import { NetworkOrSignerOrProvider, TransactionResult } from "../types";
import { SDKOptions } from "../../schema";
import { Amount, CurrencyValue } from "../../types";
import { providers } from "ethers";
/**
 * Connect and Interact with a user wallet
 * @example
 * ```javascript
 * const balance = await sdk.wallet.balance();
 * ```
 * @public
 */
export declare class UserWallet {
    private connection;
    private options;
    constructor(network: NetworkOrSignerOrProvider, options: SDKOptions);
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    /**
     * Transfer native or ERC20 tokens from this wallet to another wallet
     * @example
     * ```javascript
     *  // transfer 0.8 ETH
     * await sdk.wallet.transfer("0x...", 0.8);
     *  // transfer 0.8 tokens of `tokenContractAddress`
     * await sdk.wallet.transfer("0x...", 0.8, tokenContractAddress);
     * ```
     * @param to - the account to send funds to
     * @param amount - the amount in tokens
     * @param currencyAddress - Optional - ERC20 contract address of the token to transfer
     */
    transfer(to: string, amount: Amount, currencyAddress?: string): Promise<TransactionResult>;
    /**
     * Fetch the native or ERC20 token balance of this wallet
     * @example
     * ```javascript
     * // native currency balance
     * const balance = await sdk.wallet.balance();
     * // ERC20 token balance
     * const erc20balance = await sdk.wallet.balance(tokenContractAddress);
     *
     * ```
     */
    balance(currencyAddress?: string): Promise<CurrencyValue>;
    /**
     * Get the currently connected address
     * @example
     * ```javascript
     * const address = await sdk.wallet.getAddress();
     * ```
     */
    getAddress(): Promise<string>;
    /**
     * Sign any message with the connected wallet private key
     * @param message - the message to sign
     * @returns the signed message
     *
     * @example
     * ```javascript
     * // This is the message to be signed
     * const message = "Sign this message...";
     *
     * // Now we can sign the message with the connected wallet
     * const signature = await sdk.wallet.sign(message);
     * ```
     */
    sign(message: string): Promise<string>;
    /**
     * Recover the signing address from a signed message
     * @param message - the original message that was signed
     * @param signature - the signature to recover the address from
     * @returns the address that signed the message
     *
     * @example
     * ```javascript
     * const message = "Sign this message...";
     * const signature = await sdk.wallet.sign(message);
     *
     * // Now we can recover the signing address
     * const address = sdk.wallet.recoverAddress(message, signature);
     * ```
     */
    recoverAddress(message: string, signature: string): string;
    /**
     * Send a raw transaction to the blockchain from the connected wallet
     * @param transactionRequest - raw transaction data to send to the blockchain
     */
    sendRawTransaction(transactionRequest: providers.TransactionRequest): Promise<TransactionResult>;
    /** ***********************
     * PRIVATE FUNCTIONS
     * ***********************/
    private requireWallet;
    private createErc20;
}
