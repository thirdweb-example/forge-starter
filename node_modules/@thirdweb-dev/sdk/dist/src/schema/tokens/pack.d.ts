import { z } from "zod";
/**
 * @internal
 */
export declare const PackRewardsSchema: z.ZodObject<{
    erc20Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, "strip", z.ZodTypeAny, {
        contractAddress: string;
        quantityPerReward: string;
    }, {
        contractAddress: string;
        quantityPerReward: string | number;
    }>, "many">>;
    erc721Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
    }, {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }>, "many">>;
    erc1155Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
    }, {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    erc20Rewards: {
        contractAddress: string;
        quantityPerReward: string;
    }[];
    erc721Rewards: {
        tokenId: string;
        contractAddress: string;
    }[];
    erc1155Rewards: {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
    }[];
}, {
    erc20Rewards?: {
        contractAddress: string;
        quantityPerReward: string | number;
    }[] | undefined;
    erc721Rewards?: {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }[] | undefined;
    erc1155Rewards?: {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }[] | undefined;
}>;
/**
 * @internal
 */
export declare const PackRewardsOutputSchema: z.ZodObject<{
    erc20Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, {
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }>, "strip", z.ZodTypeAny, {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        contractAddress: string;
        quantityPerReward: string | number;
    }>, "many">>;
    erc721Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
    }, {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }>, "many">>;
    erc1155Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, {
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    erc20Rewards: {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
    erc721Rewards: {
        tokenId: string;
        contractAddress: string;
    }[];
    erc1155Rewards: {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
}, {
    erc20Rewards?: {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        contractAddress: string;
        quantityPerReward: string | number;
    }[] | undefined;
    erc721Rewards?: {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }[] | undefined;
    erc1155Rewards?: {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }[] | undefined;
}>;
/**
 * @internal
 */
export declare const PackMetadataInputSchema: z.ZodObject<z.extendShape<{
    erc20Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }>, {
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }>, "strip", z.ZodTypeAny, {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        contractAddress: string;
        quantityPerReward: string | number;
    }>, "many">>;
    erc721Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
    }, {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }>, "many">>;
    erc1155Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<z.extendShape<Omit<z.extendShape<{
        contractAddress: z.ZodEffects<z.ZodString, string, string>;
    }, {
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, "quantity">, {
        quantityPerReward: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }>, {
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }>, "many">>;
}, {
    packMetadata: z.ZodUnion<[z.ZodObject<z.extendShape<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodRecord<z.ZodString, z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, "many">, z.ZodRecord<z.ZodString, z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodRecord<z.ZodString, z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, "many">, z.ZodRecord<z.ZodString, z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>]>>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../..").Json> | Record<string, import("../..").Json>[] | undefined;
        attributes?: Record<string, import("../..").Json> | Record<string, import("../..").Json>[] | undefined;
    }, {
        [x: string]: import("../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../..").Json> | Record<string, import("../..").Json>[] | undefined;
        attributes?: Record<string, import("../..").Json> | Record<string, import("../..").Json>[] | undefined;
    }>, z.ZodString]>;
    rewardsPerPack: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    openStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
}>, "strip", z.ZodTypeAny, {
    erc20Rewards: {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
    erc721Rewards: {
        tokenId: string;
        contractAddress: string;
    }[];
    erc1155Rewards: {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
    packMetadata: string | {
        [x: string]: import("../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../..").Json> | Record<string, import("../..").Json>[] | undefined;
        attributes?: Record<string, import("../..").Json> | Record<string, import("../..").Json>[] | undefined;
    };
    rewardsPerPack: string;
    openStartTime: import("ethers").BigNumber;
}, {
    erc20Rewards?: {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        contractAddress: string;
        quantityPerReward: string | number;
    }[] | undefined;
    erc721Rewards?: {
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
    }[] | undefined;
    erc1155Rewards?: {
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
        tokenId: string | number | bigint | import("ethers").BigNumber;
        contractAddress: string;
        quantityPerReward: string | number | bigint | import("ethers").BigNumber;
    }[] | undefined;
    rewardsPerPack?: string | number | bigint | import("ethers").BigNumber | undefined;
    openStartTime?: Date | undefined;
    packMetadata: string | {
        [x: string]: import("../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../..").Json> | Record<string, import("../..").Json>[] | undefined;
        attributes?: Record<string, import("../..").Json> | Record<string, import("../..").Json>[] | undefined;
    };
}>;
/**
 * @public
 */
export declare type PackMetadataInput = z.input<typeof PackMetadataInputSchema>;
/**
 * @public
 */
export declare type PackMetadataOutput = z.output<typeof PackMetadataInputSchema>;
/**
 * @public
 */
export declare type PackRewards = z.input<typeof PackRewardsSchema>;
/**
 * @public
 */
export declare type PackRewardsOutput = z.output<typeof PackRewardsOutputSchema>;
