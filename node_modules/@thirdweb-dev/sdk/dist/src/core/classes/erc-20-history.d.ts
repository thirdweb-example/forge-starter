import { ContractWrapper } from "./contract-wrapper";
import { TokenERC20 } from "contracts";
import { TokenHolderBalance } from "../../types";
import { ContractEvents } from "./contract-events";
/**
 * Manages history for Token contracts
 * @public
 */
export declare class TokenERC20History {
    private events;
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TokenERC20>, events: ContractEvents<TokenERC20>);
    /**
     * Get all holder balances
     *
     * @remarks Lets you get all token holders and their corresponding balances
     * @returns - A JSON object of all token holders and their corresponding balances
     * @example
     * ```javascript
     * const allHolderBalances = await contract.history.getAllHolderBalances();
     * ```
     */
    getAllHolderBalances(): Promise<TokenHolderBalance[]>;
}
