import { z } from "zod";
import { BigNumberish } from "ethers";
/**
 * @internal
 */
export declare const BYOCContractMetadataSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}, {
    [x: string]: import("../..").Json;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare type CustomContractMetadata = z.input<typeof BYOCContractMetadataSchema>;
/**
 * @internal
 */
export declare const CustomContractInput: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    description?: string | undefined;
    merkle?: Record<string, string> | undefined;
    image?: any;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    name: string;
}, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    description?: string | undefined;
    merkle?: Record<string, string> | undefined;
    image?: any;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const CustomContractOutput: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    image: z.ZodOptional<z.ZodString>;
}>, {
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    description?: string | undefined;
    merkle?: Record<string, string> | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    name: string;
}, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    description?: string | undefined;
    merkle?: Record<string, string> | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const CustomContractDeploy: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
}>, {
    primary_sale_recipient: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    platform_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    platform_fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    trusted_forwarders: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    description?: string | undefined;
    merkle?: Record<string, string> | undefined;
    image?: any;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    primary_sale_recipient?: string | undefined;
    platform_fee_basis_points?: number | undefined;
    platform_fee_recipient?: string | undefined;
    trusted_forwarders?: string[] | undefined;
    name: string;
}, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    description?: string | undefined;
    merkle?: Record<string, string> | undefined;
    image?: any;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    primary_sale_recipient?: string | undefined;
    platform_fee_basis_points?: number | undefined;
    platform_fee_recipient?: string | undefined;
    trusted_forwarders?: string[] | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const CustomContractSchema: {
    deploy: z.ZodObject<z.extendShape<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    }>, {
        primary_sale_recipient: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        platform_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        platform_fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        trusted_forwarders: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        description?: string | undefined;
        merkle?: Record<string, string> | undefined;
        image?: any;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        primary_sale_recipient?: string | undefined;
        platform_fee_basis_points?: number | undefined;
        platform_fee_recipient?: string | undefined;
        trusted_forwarders?: string[] | undefined;
        name: string;
    }, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        description?: string | undefined;
        merkle?: Record<string, string> | undefined;
        image?: any;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        primary_sale_recipient?: string | undefined;
        platform_fee_basis_points?: number | undefined;
        platform_fee_recipient?: string | undefined;
        trusted_forwarders?: string[] | undefined;
        name: string;
    }>;
    output: z.ZodObject<z.extendShape<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        image: z.ZodOptional<z.ZodString>;
    }>, {
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        description?: string | undefined;
        merkle?: Record<string, string> | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        name: string;
    }, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        description?: string | undefined;
        merkle?: Record<string, string> | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        name: string;
    }>;
    input: z.ZodObject<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        description?: string | undefined;
        merkle?: Record<string, string> | undefined;
        image?: any;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        name: string;
    }, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        description?: string | undefined;
        merkle?: Record<string, string> | undefined;
        image?: any;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        name: string;
    }>;
};
/**
 * @internal
 */
export declare const PreDeployMetadata: z.ZodObject<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
}, "strip", z.ZodAny, {
    [x: string]: any;
    name: string;
    metadataUri: string;
    bytecodeUri: string;
}, {
    [x: string]: any;
    name: string;
    metadataUri: string;
    bytecodeUri: string;
}>;
/**
 * @internal
 */
export declare const ExtraPublishMetadataSchema: z.ZodObject<{
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodAny, {
    [x: string]: any;
    description?: string | undefined;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    version: string;
}, {
    [x: string]: any;
    description?: string | undefined;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    version: string;
}>;
export declare type ExtraPublishMetadata = z.infer<typeof ExtraPublishMetadataSchema>;
/**
 * @internal
 */
export declare const FullPublishMetadataSchema: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
}, {
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}>, {
    publisher: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}>, "strip", z.ZodAny, {
    [x: string]: any;
    publisher?: string | undefined;
    description?: string | undefined;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    name: string;
    version: string;
    metadataUri: string;
    bytecodeUri: string;
}, {
    [x: string]: any;
    publisher?: string | undefined;
    description?: string | undefined;
    displayName?: string | undefined;
    readme?: string | undefined;
    license?: string | undefined;
    changelog?: string | undefined;
    tags?: string[] | undefined;
    name: string;
    version: string;
    metadataUri: string;
    bytecodeUri: string;
}>;
export declare type FullPublishMetadata = z.infer<typeof FullPublishMetadataSchema>;
/**
 * @internal
 */
export declare const ProfileSchemaInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    website: z.ZodOptional<z.ZodString>;
    twitter: z.ZodOptional<z.ZodString>;
    telegram: z.ZodOptional<z.ZodString>;
    facebook: z.ZodOptional<z.ZodString>;
    github: z.ZodOptional<z.ZodString>;
    medium: z.ZodOptional<z.ZodString>;
    linkedin: z.ZodOptional<z.ZodString>;
    reddit: z.ZodOptional<z.ZodString>;
    discord: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    bio?: string | undefined;
    avatar?: any;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
}, {
    name?: string | undefined;
    bio?: string | undefined;
    avatar?: any;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
}>;
export declare const ProfileSchemaOutput: z.ZodObject<z.extendShape<{
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    website: z.ZodOptional<z.ZodString>;
    twitter: z.ZodOptional<z.ZodString>;
    telegram: z.ZodOptional<z.ZodString>;
    facebook: z.ZodOptional<z.ZodString>;
    github: z.ZodOptional<z.ZodString>;
    medium: z.ZodOptional<z.ZodString>;
    linkedin: z.ZodOptional<z.ZodString>;
    reddit: z.ZodOptional<z.ZodString>;
    discord: z.ZodOptional<z.ZodString>;
}, {
    avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    bio?: string | undefined;
    avatar?: string | null | undefined;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
}, {
    name?: string | undefined;
    bio?: string | undefined;
    avatar?: string | null | undefined;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
}>;
export declare type ProfileMetadataInput = z.infer<typeof ProfileSchemaInput>;
export declare type ProfileMetadata = z.infer<typeof ProfileSchemaOutput>;
/**
 * @internal
 */
export declare const AbiTypeSchema: z.ZodObject<z.extendShape<{
    type: z.ZodString;
    name: z.ZodString;
}, {
    stateMutability: z.ZodOptional<z.ZodString>;
    components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodAny, {
        [x: string]: any;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        type: string;
        name: string;
    }>, "many">>;
}>, "strip", z.ZodAny, {
    [x: string]: any;
    components?: {
        [x: string]: any;
        type: string;
        name: string;
    }[] | undefined;
    stateMutability?: string | undefined;
    type: string;
    name: string;
}, {
    [x: string]: any;
    components?: {
        [x: string]: any;
        type: string;
        name: string;
    }[] | undefined;
    stateMutability?: string | undefined;
    type: string;
    name: string;
}>;
/**
 * @internal
 */
export declare const AbiObjectSchema: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodAny, {
            [x: string]: any;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodAny, {
            [x: string]: any;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }>, "many">>;
}, "strip", z.ZodAny, {
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
}, {
    [x: string]: any;
    name?: string | undefined;
    outputs?: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[] | undefined;
    inputs?: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[] | undefined;
    type: string;
}>;
/**
 * @internal
 */
export declare const AbiSchema: z.ZodArray<z.ZodObject<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodAny, {
            [x: string]: any;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodAny, {
            [x: string]: any;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }>, "many">>;
}, "strip", z.ZodAny, {
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
}, {
    [x: string]: any;
    name?: string | undefined;
    outputs?: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[] | undefined;
    inputs?: {
        [x: string]: any;
        components?: {
            [x: string]: any;
            type: string;
            name: string;
        }[] | undefined;
        stateMutability?: string | undefined;
        type: string;
        name: string;
    }[] | undefined;
    type: string;
}>, "many">;
/**
 * @internal
 */
export declare const PublishedContractSchema: z.ZodObject<{
    id: z.ZodString;
    timestamp: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    metadataUri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    metadataUri: string;
    timestamp: string;
}, {
    id: string;
    metadataUri: string;
    timestamp: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @internal
 * Follows https://docs.soliditylang.org/en/v0.8.15/natspec-format.html
 */
export declare const ContractInfoSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodString>;
    details: z.ZodOptional<z.ZodString>;
    notice: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    author?: string | undefined;
    details?: string | undefined;
    notice?: string | undefined;
}, {
    title?: string | undefined;
    author?: string | undefined;
    details?: string | undefined;
    notice?: string | undefined;
}>;
/**
 * @internal
 */
export declare const CompilerMetadataFetchedSchema: z.ZodObject<{
    name: z.ZodString;
    abi: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
            type: z.ZodString;
            name: z.ZodString;
        }, {
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodAny, {
                [x: string]: any;
                type: string;
                name: string;
            }, {
                [x: string]: any;
                type: string;
                name: string;
            }>, "many">>;
        }>, "strip", z.ZodAny, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
            type: z.ZodString;
            name: z.ZodString;
        }, {
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodAny, {
                [x: string]: any;
                type: string;
                name: string;
            }, {
                [x: string]: any;
                type: string;
                name: string;
            }>, "many">>;
        }>, "strip", z.ZodAny, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }>, "many">>;
    }, "strip", z.ZodAny, {
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
    }, {
        [x: string]: any;
        name?: string | undefined;
        outputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        inputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        type: string;
    }>, "many">;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    info: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        author: z.ZodOptional<z.ZodString>;
        details: z.ZodOptional<z.ZodString>;
        notice: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }>;
    licenses: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
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
}, {
    name: string;
    metadata: Record<string, any>;
    abi: {
        [x: string]: any;
        name?: string | undefined;
        outputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        inputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        type: string;
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
 */
export declare const PreDeployMetadataFetchedSchema: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
}, {
    name: z.ZodString;
    abi: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
            type: z.ZodString;
            name: z.ZodString;
        }, {
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodAny, {
                [x: string]: any;
                type: string;
                name: string;
            }, {
                [x: string]: any;
                type: string;
                name: string;
            }>, "many">>;
        }>, "strip", z.ZodAny, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
            type: z.ZodString;
            name: z.ZodString;
        }, {
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodAny, {
                [x: string]: any;
                type: string;
                name: string;
            }, {
                [x: string]: any;
                type: string;
                name: string;
            }>, "many">>;
        }>, "strip", z.ZodAny, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }, {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }>, "many">>;
    }, "strip", z.ZodAny, {
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
    }, {
        [x: string]: any;
        name?: string | undefined;
        outputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        inputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        type: string;
    }>, "many">;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    info: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        author: z.ZodOptional<z.ZodString>;
        details: z.ZodOptional<z.ZodString>;
        notice: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }>;
    licenses: z.ZodArray<z.ZodString, "many">;
}>, {
    bytecode: z.ZodString;
}>, "strip", z.ZodAny, {
    [x: string]: any;
    name: string;
    metadataUri: string;
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
    bytecodeUri: string;
    bytecode: string;
}, {
    [x: string]: any;
    name: string;
    metadataUri: string;
    metadata: Record<string, any>;
    abi: {
        [x: string]: any;
        name?: string | undefined;
        outputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        inputs?: {
            [x: string]: any;
            components?: {
                [x: string]: any;
                type: string;
                name: string;
            }[] | undefined;
            stateMutability?: string | undefined;
            type: string;
            name: string;
        }[] | undefined;
        type: string;
    }[];
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    licenses: string[];
    bytecodeUri: string;
    bytecode: string;
}>;
export declare type PreDeployMetadataFetched = z.infer<typeof PreDeployMetadataFetchedSchema>;
export declare type ContractParam = z.infer<typeof AbiTypeSchema>;
export declare type PublishedContract = z.infer<typeof PublishedContractSchema>;
export declare type PublishedContractFetched = {
    name: string;
    publishedTimestamp: BigNumberish;
    publishedMetadata: FullPublishMetadata;
};
export declare type AbiFunction = {
    name: string;
    inputs: z.infer<typeof AbiTypeSchema>[];
    outputs: z.infer<typeof AbiTypeSchema>[];
    signature: string;
    stateMutability: string;
    comment: string;
};
export declare type ContractSource = {
    filename: string;
    source: string;
};
export declare type PublishedMetadata = z.infer<typeof CompilerMetadataFetchedSchema>;
