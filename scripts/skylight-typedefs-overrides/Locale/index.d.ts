
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare namespace LocaleModule {
    /** 
    * ```
    (get) fromDevice: string
    (set) (Not Available)
    ```
    
    Provides the ISO 639-1 language + ISO 3166-1 region compliant locale identifier, e.g. `en_US` or `zh_HK`.
    */
    const fromDevice: string;
    /** 
    * ```
    (get) language: StringSignal
    (set) (Not Available)
    ```
    
    Provides the ISO 639-1 compliant language identifier, e.g. `en` or `zh`.
    */
    const language: StringSignal;
    /** 
    * ```
    (get) locale: StringSignal
    (set) (Not Available)
    ```
    
    Provides the ISO 639-1 language + ISO 3166-1 region compliant locale identifier, e.g. `en_US` or `zh_HK`.
    */
    const locale: StringSignal;
    /** 
    * ```
    (get) region: StringSignal
    (set) (Not Available)
    ```
    
    Provides the ISO 3166-1 region identifier, e.g. `US`, or `HK`.
    */
    const region: StringSignal;
}
export = LocaleModule;