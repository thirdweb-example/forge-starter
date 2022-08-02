import { z } from "zod";
/**
 * @internal
 */
export declare const ERC20WrappableSchema: z.ZodObject<z.extendShape<{
    contractAddress: z.ZodEffects<z.ZodString, string, string>;
}, {
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}>, "strip", z.ZodTypeAny, {
    quantity: string;
    contractAddress: string;
}, {
    quantity: string | number;
    contractAddress: string;
}>;
/**
 * @internal
 */
export declare const ERC721WrappableSchema: z.ZodObject<z.extendShape<{
    contractAddress: z.ZodEffects<z.ZodString, string, string>;
}, {
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
}>, "strip", z.ZodTypeAny, {
    tokenId: string;
    contractAddress: string;
}, {
    tokenId: string | number | bigint | import("ethers").BigNumber;
    contractAddress: string;
}>;
/**
 * @internal
 */
export declare const ERC1155WrappableSchema: z.ZodObject<z.extendShape<{
    contractAddress: z.ZodEffects<z.ZodString, string, string>;
}, {
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
}>, "strip", z.ZodTypeAny, {
    tokenId: string;
    quantity: string;
    contractAddress: string;
}, {
    tokenId: string | number | bigint | import("ethers").BigNumber;
    quantity: string | number | bigint | import("ethers").BigNumber;
    contractAddress: string;
}>;
