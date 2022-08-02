/**
 * @internal
 */
export declare type Semver = {
    major: number;
    minor: number;
    patch: number;
    versionString: string;
};
/**
 * @internal
 * @param version
 */
export declare function toSemver(version: string): Semver;
/**
 * @internal
 * @param current
 * @param next
 */
export declare function isIncrementalVersion(current: string, next: string): boolean;
