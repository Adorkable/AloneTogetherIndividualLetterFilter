
/// <reference path="../Reactive.StringSignal/index.d.ts" />

declare namespace AnalyticsModule {
    /** 
    * ```
     (get) cameraProductName: string
     (set) (Not Available)
     ```
    
     Specifies the current context camera product name used for analytics.
    
     Note: This can return empty string in cases where current product name couldn't be determined.
    */
    const cameraProductName: string;
    /** 
    * ```
    (get) productName: StringSignal
    (set) (Not Available)
    ```
    
    Specifies the current context camera product name used for analytics.
    
    Note: This can return empty string signal in cases where current product name couldn't be determined.
    */
    const productName: StringSignal;
/** 
*  
 *  logEvent(eventName: string, extras: Object): void
 *   
 * 
 *  Log an analytics event with a custom name and optional extras object.
 */function logEvent(eventName: string, extras: Object): void;

}
export = AnalyticsModule;