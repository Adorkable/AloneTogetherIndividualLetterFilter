/// <reference path="../Diagnostics.TypeSystemMetadata/index.d.ts" />


/// <reference path="../Reactive.BoolSignal/index.d.ts" />
declare namespace DiagnosticsModule {
    /** 
    * ```
    (get) typeSystem: TypeSystemMetadata
    (set) (Not Available)
    ```
    
    Object containing available module and types information.
    */
    const typeSystem: TypeSystemMetadata;
/** 
*  
 * getModuleNames(): Array<string>
 *  
 * 
 * Returns an array of names of all the scripting modules that can be loaded through a `require` call.
 * Note: This set of modules is based on the list of enabled capabilities.
 */function getModuleNames(): Array<string>;

/** 
*  
 * getTypeDescriptions(): Object
 *  
 * 
 * Finds the descriptions for each type in the effect.
 */function getTypeDescriptions(): Object;

/** 
*  
 * log(content: Object): void
 *  
 * 
 * Flattens content to a string and prints it to the debug console.
 * Note: this function can be reassigned to any var (i.e. `foo.log = Diagnostics.log;`)
 */function log(content: Object): void;

/** 
*  
 * watch(tag: string, signal: BoolSignal | ScalarSignal | StringSignal): void
 *  
 * 
 * Adds the specified signal to the watch view in AR Studio with the specified tag.
 */function watch(tag: string, signal: BoolSignal | boolean | ScalarSignal | number | StringSignal | string): void;

}
export = DiagnosticsModule;