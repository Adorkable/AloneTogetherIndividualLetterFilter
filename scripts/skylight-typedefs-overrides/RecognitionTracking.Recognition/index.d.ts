

/// <reference path="../RecognitionTracking.Tracking/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
declare interface Recognition {
    /** 
    * ```
    (get) metadata: string
    (set) (Not Available)
    ```
    */
    metadata: string;
    /** 
    * ```
    (get) hasTracking: boolean
    (set) (Not Available)
    ```
    */
    hasTracking: boolean;
    /** 
    * ```
    (get) tracking: Tracking
    (set) (Not Available)
    ```
    */
    tracking: Tracking;
    /** 
    * ```
    (get) onLost: EventSource
    (set) (Not Available)
    ```
    */
    onLost: EventSource;
} 
