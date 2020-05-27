
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare interface ExternalStreamTexture {
    /** 
    * ```
    (get) streamIdentifier: string
    (set) streamIdentifier: string
    ```
    
    Specifies a `StringValue` representing the identifier of stream (used by External Stream Texture Factory to map stream with texture model).
    */
    streamIdentifier: string;
    /** 
    * ```
    (get) streamId: StringSignal
    (set) streamId: StringSignal
    ```
    
    Specifies a `StringSignal` representing the identifier of stream (used by External Stream Texture Factory to map stream with texture model).
    */
    streamId: StringSignal;
} 
