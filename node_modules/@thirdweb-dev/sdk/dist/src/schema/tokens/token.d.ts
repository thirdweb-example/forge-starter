import { z } from "zod";
/**
 * @internal
 */
export declare const TokenMintInputSchema: z.ZodObject<{
    toAddress: z.ZodEffects<z.ZodString, string, string>;
    amount: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}, "strip", z.ZodTypeAny, {
    amount: string;
    toAddress: string;
}, {
    amount: string | number;
    toAddress: string;
}>;
/**
 * @public
 */
export declare type TokenMintInput = z.input<typeof TokenMintInputSchema>;
