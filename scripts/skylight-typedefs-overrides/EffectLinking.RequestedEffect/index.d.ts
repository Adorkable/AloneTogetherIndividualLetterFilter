
/// <reference path="../EventSource<RequestFailure>/index.d.ts" />
declare interface RequestedEffect {
    /** 
    * ```
    (get) effectID: string
    (set) (Not Available)
    ```
    
    Specifies the effectID associated with this RequestedEffect.
    */
    effectID: string;
    /** 
    * ```
    (get) onApplyFailure: EventSource<RequestFailure>
    (set) (Not Available)
    ```
    
    Returns an `EventSource` to which you may subscribe. The event fires when a request to apply an effect fails. The event contains a JSON object in the format:
    */
    onApplyFailure: EventSource<RequestFailure>;
/** 
*  
 * apply(): void
 *  
 * 
 * Attempts to apply the effect (i.e. load) that this RequestedEffect represents.
 */apply(): void
        ;

} 
