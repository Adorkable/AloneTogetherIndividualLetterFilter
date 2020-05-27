/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Multiplayer.StateSignalType/index.d.ts" />

declare namespace MultiplayerModule {
    /** 
    * ```
                 (get) viewerId: StringSignal
                 (set) (Not Available)
                 ```
    
                 Contains the viewerId of the user using this effect as a string signal
    */
    const viewerId: StringSignal;
    /** 
    * ```
                 (get) message: { [key: string] : string }
                 (set) (Not Available)
                 ```
    
                 Receives the latest incoming message from the peers using the effect.
                 Received message should contain only one entry.
    */
    // const message: {;
    /** 
    * ```
                 (get) numParticipants: ScalarSignal
                 (set) (Not Available)
                 ```
    
                 Scalar signal of the number of participants currently using the effect in the call
    */
    const numParticipants: ScalarSignal;
    /** 
    * ```
                  (get) participants: Array<string>
                  (set) (Not Available)
                  ```
                  ** DEPRECATED **
                  ** Please use `onParticipantsChanged` property instead. **
    
                  Returns an array of participant id's of people currently using the effect in the call
    */
    const participants: Array<string>;
    /** 
    * ```
                   (get) onParticipantsChanged: Array<string>
                   (set) (Not Available)
                   ```
                   ** Soon to be deprecated! We will rewrite this to use the `participants` signal **
                   ** once we have collection signals **
    
                   Triggered when the participants of the call has changed, returning an array of
                   the current participant's ids.
    */
    const onParticipantsChanged: Array<string>;
/** 
*  
 *               getViewerID(): string
 *                
 *               ** DEPRECATED **
 *               ** Please use `viewerId` property instead. **
 * 
 *               Returns the viewerID of this user.
 */function getViewerID(): string
        ;

/** 
*  
 *              sendStateUpdate(state: { [key: string] : string }): void
 *               
 * 
 *              Sends the latest state snapshot (with values serialized to strings)
 *              to other peers using this effect within an RTC call.
 *              The keys here should always be a subset of the of keys in `activate`.
 * 
 *              For example: { "numPlayers": "2", "scores": "2,5" }
 */function sendStateUpdate(state: { [key: string]: string }): void
        ;

/** 
*  
 *              sendMessage(message: { [key: string] : string }): void
 *               
 * 
 *              Sends a message to the initiator of the multiplayer effect
 *              within an RTC call. Should only have one entry.
 * 
 *              For example: { "miss": "4" }
 */function sendMessage(message: { [key: string]: string }): void
        ;

/** 
*  
 *              getState(key: string): ScalarSignal | BoolSignal | StringSignal
 *               
 * 
 *              Based off of `metadata: { [key: string] : StateSignalType }`
 *              passed into `activate`.
 * 
 *              String input will match keys defined from the metadata.
 *              Output signal type is dependent on the `keyType` enum from metadata.
 */function getState(key: string): ScalarSignal | BoolSignal | StringSignal
        ;

/** 
* 
 *  
 * activate(metadata: { [key: string] : StateSignalType }): void
 *  
 * 
 * Sets up the initial state signals. Input is the metadata of state types
 * defined as a mapping from the state key (string) to state types
 * (enum StateSignalType).
 * 
 * For example: { numPlayers: StateSignalType::SCALAR, scores: StateSignalType::STRING }
 *     
 */function activate(metadata: { [key: string]: StateSignalType }): void
        ;

}
export = MultiplayerModule;