/// <reference path="../EventSource<RequestFailure>/index.d.ts" />

boolean | void
    /// <reference path="../EffectLinking.RequestedEffect/index.d.ts" />
    declare namespace EffectLinkingModule {
        /** 
        * ```
        (get) onGoToEffectFailure: EventSource<RequestFailure>
        (set) (Not Available)
        ```
        
        Global failure listener
        */
        const onGoToEffectFailure: EventSource<RequestFailure>;
/** 
*  
 * goToEffect(effectId: string): void
 *  
 * 
 * Equivalent to calling `requestEffect({'effectId': effectId}).apply()`
 */function goToEffect(effectId: string): void
            ;

/** 
*  
 * requestEffect(requestEffectParams: {[key: string]: string}): RequestedEffect
 *  
 * 
 * Requests the hosting environment to download an effect via it's ID.
 * `effectId` parameter defines the ID of the effect being requested.
 * Returned `RequestedEffect` can be used to apply the effect, and subscribe to apply failure.
 */function requestEffect(requestEffectParams: { [key: string]: string }): RequestedEffect
            ;

    }
export = EffectLinkingModule;