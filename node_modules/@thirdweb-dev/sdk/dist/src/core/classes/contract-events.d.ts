import { ContractWrapper } from "./contract-wrapper";
import { BaseContract, providers } from "ethers";
import { ListenerFn } from "eventemitter3";
import { ContractEvent, EventQueryFilter } from "../../types/index";
/**
 * Listen to Contract events in real time
 * @public
 */
export declare class ContractEvents<TContract extends BaseContract> {
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Subscribe to transactions in this contract.
     * @remarks Will emit an "event" object containing the transaction status ('submitted' and 'completed') and hash
     * @example
     * ```javascript
     * contract.events.addTransactionListener((event) => {
     *   console.log(event);
     * }
     * ```
     * @param listener - the callback function that will be called on every transaction
     * @public
     */
    addTransactionListener(listener: ListenerFn): void;
    /**
     * Remove a transaction listener
     * @remarks Remove a listener that was added with addTransactionListener
     * @example
     * ```javascript
     * contract.events.removeTransactionListener((event) => {
     *  console.log(event);
     * }
     * ```
     * @param listener - the callback function to remove
     * @public
     */
    removeTransactionListener(listener: ListenerFn): void;
    /**
     * Subscribe to contract events
     * @remarks You can add a listener for any contract event to run a function when
     * the event is emitted. For example, if you wanted to listen for a "TokensMinted" event,
     * you could do the following:
     * @example
     * ```javascript
     * contract.events.addEventListener("TokensMinted", (event) => {
     *   console.log(event);
     * });
     * ```
     * @public
     * @param eventName - the event name as defined in the contract
     * @param listener - the callback function that will be called on every new event
     * @returns a function to un-subscribe from the event
     */
    addEventListener(eventName: keyof TContract["filters"] | (string & {}), listener: (event: Record<string, any>) => void): () => void;
    /**
     * Listen to all events emitted from this contract
     *
     * @example
     * ```javascript
     * contract.events.listenToAllEvents((event) => {
     *   console.log(event.eventName) // the name of the emitted event
     *   console.log(event.data) // event payload
     * }
     * ```
     * @public
     * @param listener - the callback function that will be called on every new event
     * @returns A function that can be called to stop listening to events
     */
    listenToAllEvents(listener: (event: ContractEvent) => void): () => void;
    /**
     * Remove an event listener from this contract
     * @remarks Remove a listener that was added with addEventListener
     * @example
     * ```javascript
     * contract.events.removeEventListener("TokensMinted", (event) => {
     *   console.log(event);
     * });
     * ```
     * @public
     * @param eventName - the event name as defined in the contract
     * @param listener - the listener to unregister
     */
    removeEventListener(eventName: keyof TContract["filters"] | (string & {}), listener: providers.Listener): void;
    /**
     * Remove all listeners on this contract
     * @remarks Remove all listeners from a contract
     * @example
     * ```javascript
     * contract.events.removeAllListeners();
     * ```
     * @public
     */
    removeAllListeners(): void;
    /**
     * Get All Events
     * @remarks Get a list of all the events emitted from this contract during the specified time period
     * @example
     * ```javascript
     * // Optionally pass in filters to limit the blocks from which events are retrieved
     * const filters = {
     *   fromBlock: 0,
     *   toBlock: 1000000,
     * }
     * const events = await contract.events.getAllEvents(filters);
     * console.log(events[0].eventName);
     * console.log(events[0].data);
     * ```
     *
     * @param filters - Specify the from and to block numbers to get events for, defaults to all blocks
     * @returns The event objects of the events emitted with event names and data for each event
     */
    getAllEvents(filters?: EventQueryFilter): Promise<ContractEvent[]>;
    /**
     * Get Events
     * @remarks Get a list of the events of a specific type emitted from this contract during the specified time period
     * @example
     * ```javascript
     * // The name of the event to get logs for
     * const eventName = "Transfer";
     * // Optionally pass in filters to limit the blocks from which events are retrieved
     * const filters = {
     *   fromBlock: 0,
     *   toBlock: 1000000,
     * }
     * const events = await contract.events.getEvents(eventName, filters);
     * console.log(events[0].eventName);
     * console.log(events[0].data);
     * ```
     *
     * @param eventName - The name of the event to get logs for
     * @param filters - Specify the from and to block numbers to get events for, defaults to all blocks. @see EventQueryFilter
     * @returns The requested event objects with event data
     */
    getEvents(eventName: string, filters?: EventQueryFilter): Promise<ContractEvent[]>;
    private parseEvents;
    private toContractEvent;
}
