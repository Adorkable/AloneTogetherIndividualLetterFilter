
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare namespace InstructionModule {
    /** 
    * ```
    (get) automaticInstructionsEnabled: boolean
    (set) automaticInstructionsEnabled: boolean
    ```
    
    Specifies whether or not automatic instructions are enabled.
    */
    const automaticInstructionsEnabled: boolean;
    /** 
    * ```
    (get) automaticHintsEnabled: BoolSignal
    (set) automaticHintsEnabled: BoolSignal
    ```
    
    Specifies whether or not automatic instruction hints are enabled.
    */
    const automaticHintsEnabled: BoolSignal;
/** 
*  
 * bind(enabled: BooleanSignal, token: StringSignal): void
 *  
 * 
 * When enabled, shows instruction for given token (you can find and select custom instruction
 * tokens in project capabilities)
 * 
 * To hide instruction simply set enabled to `false`.
 * 
 * You can have at most one binding for instructions, meaning that setting a different binding
 * would replace any previously created and setup binding for instructions.
 */function bind(enabled: BoolSignal, token: StringSignal | string): void
        ;

}
export = InstructionModule;