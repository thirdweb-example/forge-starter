import { z } from "zod";
/**
 * @internal
 */
export declare const LoginOptionsSchema: z.ZodOptional<z.ZodObject<{
    /**
     * The optional nonce of the login request used to prevent replay attacks
     */
    nonce: z.ZodOptional<z.ZodString>;
    /**
     * The optional time after which the login payload will be invalid
     */
    expirationTime: z.ZodOptional<z.ZodDate>;
    /**
     * The optional chain ID that the login request was intended for
     */
    chainId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    chainId?: number | undefined;
    nonce?: string | undefined;
    expirationTime?: Date | undefined;
}, {
    chainId?: number | undefined;
    nonce?: string | undefined;
    expirationTime?: Date | undefined;
}>>;
/**
 * @internal
 */
export declare const LoginPayloadDataSchema: z.ZodObject<{
    /**
     * The domain that the user is attempting to login to
     */
    domain: z.ZodString;
    /**
     * The address of the account that is logging in
     */
    address: z.ZodEffects<z.ZodString, string, string>;
    /**
     * The nonce of the login request used to prevent replay attacks, defaults to a random UUID
     */
    nonce: z.ZodDefault<z.ZodString>;
    /**
     * The time after which the login payload will be invalid, defaults to 5 minutes from now
     */
    expiration_time: z.ZodEffects<z.ZodDate, string, Date>;
    /**
     * The chain ID that the login request was intended for, defaults to none
     */
    chain_id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    chain_id?: number | undefined;
    nonce: string;
    address: string;
    domain: string;
    expiration_time: string;
}, {
    nonce?: string | undefined;
    chain_id?: number | undefined;
    address: string;
    domain: string;
    expiration_time: Date;
}>;
/**
 * @internal
 */
export declare const LoginPayloadSchema: z.ZodObject<{
    /**
     * The payload data used for login
     */
    payload: z.ZodObject<{
        /**
         * The domain that the user is attempting to login to
         */
        domain: z.ZodString;
        /**
         * The address of the account that is logging in
         */
        address: z.ZodEffects<z.ZodString, string, string>;
        /**
         * The nonce of the login request used to prevent replay attacks, defaults to a random UUID
         */
        nonce: z.ZodDefault<z.ZodString>;
        /**
         * The time after which the login payload will be invalid, defaults to 5 minutes from now
         */
        expiration_time: z.ZodEffects<z.ZodDate, string, Date>;
        /**
         * The chain ID that the login request was intended for, defaults to none
         */
        chain_id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        chain_id?: number | undefined;
        nonce: string;
        address: string;
        domain: string;
        expiration_time: string;
    }, {
        nonce?: string | undefined;
        chain_id?: number | undefined;
        address: string;
        domain: string;
        expiration_time: Date;
    }>;
    /**
     * The signature of the login request used for verification
     */
    signature: z.ZodString;
}, "strip", z.ZodTypeAny, {
    signature: string;
    payload: {
        chain_id?: number | undefined;
        nonce: string;
        address: string;
        domain: string;
        expiration_time: string;
    };
}, {
    signature: string;
    payload: {
        nonce?: string | undefined;
        chain_id?: number | undefined;
        address: string;
        domain: string;
        expiration_time: Date;
    };
}>;
/**
 * @internal
 */
export declare const VerifyOptionsSchema: z.ZodOptional<z.ZodObject<{
    /**
     * The optional chain ID to expect the request to be for
     */
    chainId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    chainId?: number | undefined;
}, {
    chainId?: number | undefined;
}>>;
/**
 * @internal
 */
export declare const AuthenticationOptionsSchema: z.ZodOptional<z.ZodObject<{
    /**
     * The date before which the authentication payload is invalid
     */
    invalidBefore: z.ZodOptional<z.ZodDate>;
    /**
     * The date after which the authentication payload is invalid
     */
    expirationTime: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    expirationTime?: Date | undefined;
    invalidBefore?: Date | undefined;
}, {
    expirationTime?: Date | undefined;
    invalidBefore?: Date | undefined;
}>>;
/**
 * @internal
 */
export declare const AuthenticationPayloadDataSchema: z.ZodObject<{
    /**
     * The address of the wallet issuing the payload
     */
    iss: z.ZodString;
    /**
     * The address of the wallet requesting to authenticate
     */
    sub: z.ZodString;
    /**
     * The domain intended to receive the authentication payload
     */
    aud: z.ZodString;
    /**
     * The date before which the authentication payload is invalid
     */
    exp: z.ZodEffects<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, number, Date>;
    /**
     * The date after which the authentication payload is invalid
     */
    nbf: z.ZodEffects<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, number, Date>;
    /**
     * The date on which the payload was issued
     */
    iat: z.ZodEffects<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, number, Date>;
    /**
     * The unique identifier of the payload
     */
    jti: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    iss: string;
    sub: string;
    aud: string;
    exp: number;
    nbf: number;
    iat: number;
    jti: string;
}, {
    jti?: string | undefined;
    iss: string;
    sub: string;
    aud: string;
    exp: Date;
    nbf: Date;
    iat: Date;
}>;
/**
 * @internal
 */
export declare const AuthenticationPayloadSchema: z.ZodObject<{
    /**
     * The payload data used for authentication
     */
    payload: z.ZodObject<{
        /**
         * The address of the wallet issuing the payload
         */
        iss: z.ZodString;
        /**
         * The address of the wallet requesting to authenticate
         */
        sub: z.ZodString;
        /**
         * The domain intended to receive the authentication payload
         */
        aud: z.ZodString;
        /**
         * The date before which the authentication payload is invalid
         */
        exp: z.ZodEffects<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, number, Date>;
        /**
         * The date after which the authentication payload is invalid
         */
        nbf: z.ZodEffects<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, number, Date>;
        /**
         * The date on which the payload was issued
         */
        iat: z.ZodEffects<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, number, Date>;
        /**
         * The unique identifier of the payload
         */
        jti: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        iss: string;
        sub: string;
        aud: string;
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
    }, {
        jti?: string | undefined;
        iss: string;
        sub: string;
        aud: string;
        exp: Date;
        nbf: Date;
        iat: Date;
    }>;
    /**
     * The signature of the authentication payload used for authentication
     */
    signature: z.ZodString;
}, "strip", z.ZodTypeAny, {
    signature: string;
    payload: {
        iss: string;
        sub: string;
        aud: string;
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
    };
}, {
    signature: string;
    payload: {
        jti?: string | undefined;
        iss: string;
        sub: string;
        aud: string;
        exp: Date;
        nbf: Date;
        iat: Date;
    };
}>;
/**
 * @public
 */
export declare type LoginOptions = z.input<typeof LoginOptionsSchema>;
/**
 * @public
 */
export declare type LoginPayloadData = z.output<typeof LoginPayloadDataSchema>;
/**
 * @public
 */
export declare type LoginPayload = z.output<typeof LoginPayloadSchema>;
/**
 * @public
 */
export declare type VerifyOptions = z.input<typeof VerifyOptionsSchema>;
/**
 * @public
 */
export declare type AuthenticationOptions = z.input<typeof AuthenticationOptionsSchema>;
/**
 * @public
 */
export declare type AuthenticationPayloadData = z.output<typeof AuthenticationPayloadDataSchema>;
/**
 * @public
 */
export declare type AuthenticationPayload = z.output<typeof AuthenticationPayloadSchema>;
