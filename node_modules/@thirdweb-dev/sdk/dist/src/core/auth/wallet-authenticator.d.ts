import { SDKOptions } from "../../schema";
import { LoginOptions, LoginPayload, AuthenticationOptions, VerifyOptions } from "../../schema/auth";
import { RPCConnectionHandler } from "../classes/rpc-connection-handler";
import { NetworkOrSignerOrProvider } from "../types";
import { UserWallet } from "../wallet";
/**
 * Wallet Authenticator
 * @remarks The wallet authenticator enables server-side applications to securely identify the
 * connected wallet address of users on the client-side, and also enables users to authenticate
 * to any backend using just their wallet. It implements the JSON Web Token (JWT) authentication
 * standard.
 *
 * @example
 * ```javascript
 * // We specify the domain of the application to authenticate to
 * const domain = "thirdweb.com"
 *
 * // On the client side, we can generate a payload for the connected wallet to login
 * const loginPayload = await sdk.auth.login(domain);
 *
 * // Then on the server side, we can securely verify the connected client-side address
 * const address = sdk.auth.verify(domain, loginPayload);
 *
 * // And we can also generate an authentication token to send to the client
 * const token = sdk.auth.generate(domain, loginPayload);
 *
 * // Finally, the token can be send from the client to the server to make authenticated requests
 * // And the server can use the following function to authenticate a token and verify the associated address
 * const address = sdk.auth.authenticate(domain, token);
 * ```
 * @beta
 */
export declare class WalletAuthenticator extends RPCConnectionHandler {
    private wallet;
    constructor(network: NetworkOrSignerOrProvider, wallet: UserWallet, options: SDKOptions);
    /**
     * Login With Connected Wallet
     * @remarks Client-side function that allows the connected wallet to login to a server-side application.
     * Generates a login payload that can be sent to the server-side for verification or authentication.
     *
     * @param domain - The domain of the server-side application to login to
     * @param options - Optional configuration options for the login request
     * @returns Login payload that can be used on the server-side to verify the login request or authenticate
     *
     * @example
     * ```javascript
     * // Add the domain of the application users will login to, this will be used throughout the login process
     * const domain = "thirdweb.com";
     * // Generate a signed login payload for the connected wallet to authenticate with
     * const loginPayload = await sdk.auth.login(domain);
     * ```
     */
    login(domain: string, options?: LoginOptions): Promise<LoginPayload>;
    /**
     * Verify Logged In Address
     * @remarks Server-side function to securely verify the address of the logged in client-side wallet
     * by validating the provided client-side login request.
     *
     * @param domain - The domain of the server-side application to verify the login request for
     * @param payload - The login payload to verify
     * @returns Address of the logged in wallet
     *
     * @example
     * ```javascript
     * const domain = "thirdweb.com";
     * const loginPayload = await sdk.auth.login(domain);
     *
     * // Verify the login request
     * const address = sdk.auth.verify(domain, loginPayload);
     * ```
     */
    verify(domain: string, payload: LoginPayload, options?: VerifyOptions): string;
    /**
     * Generate Authentication Token
     * @remarks Server-side function that generates a JWT token from the provided login request that the
     * client-side wallet can use to authenticate to the server-side application.
     *
     * @param domain - The domain of the server-side application to authenticate to
     * @param payload - The login payload to authenticate with
     * @param options - Optional configuration options for the authentication request
     * @returns A authentication token that can be used by the client to make authenticated requests
     *
     * @example
     * ```javascript
     * const domain = "thirdweb.com";
     * const loginPayload = await sdk.auth.login(domain);
     *
     * // Generate a JWT token that can be sent to the client-side wallet and used for authentication
     * const token = await sdk.auth.generateAuthToken(domain, loginPayload);
     * ```
     */
    generateAuthToken(domain: string, payload: LoginPayload, options?: AuthenticationOptions): Promise<string>;
    /**
     * Authenticate With Token
     * @remarks Server-side function that authenticates the provided JWT token. This function verifies that
     * the provided authentication token is valid and returns the address of the authenticated wallet.
     *
     * @param domain - The domain of the server-side application doing authentication
     * @param token - The authentication token being used
     * @returns The address of the authenticated wallet
     *
     * @example
     * ```javascript
     * const domain = "thirdweb.com";
     * const loginPayload = await sdk.auth.login(domain);
     * const token = await sdk.auth.generateAuthToken(domain, loginPayload);
     *
     * // Authenticate the token and get the address of authenticating users wallet
     * const address = sdk.auth.authenticate(domain, token);
     * ```
     */
    authenticate(domain: string, token: string): Promise<string>;
    /**
     * Generates a EIP-4361 compliant message to sign based on the login payload
     */
    private generateMessage;
}
