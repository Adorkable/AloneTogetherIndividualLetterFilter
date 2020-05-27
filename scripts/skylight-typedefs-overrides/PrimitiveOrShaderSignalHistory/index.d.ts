
/// <reference path="../Reactive.PrimitiveOrShaderSignal/index.d.ts" />
declare interface PrimitiveOrShaderSignalHistory {
    /** 
    * 
    ```
    (get) length: number
    (set) (Not Available)
    ```
    
    Returns how many frames are being tracked by this history object.
    
    */
    length: number;
/** 
* 
 *  
 * at(index: number): PrimitiveOrShaderSignal
 *  
 * 
 * Returns an `PrimitiveOrShaderSignal` for the history value at given index.
 * 
 * For example, `SignalHistory.at(0)` returns value of signal at previous frame, while
 * `SignalHistory.at(1)` returns value of signal at two frames ago.
 * 
 * **Note**: See also `SignalHistory.frame` method which uses more intuitive negative indexing.
 * **Note**: You can use `SignalHistory[0]` to achieve same effect as calling `SignalHistory.at(0)`
 * 
 */at(index: number): PrimitiveOrShaderSignal;

/** 
* 
 *  
 * frame(relativeFrame: number): PrimitiveOrShaderSignal
 *  
 * 
 * Returns an `PrimitiveOrShaderSignal` for the history value at given frame relative to current one.
 * 
 * For example, `SignalHistory.frame(-1)` returns value of signal at previous frame, while
 * `SignalHistory.frame(-2)` returns value of signal at two frames ago.
 * 
 * **Note**: See also `SignalHistory.at` method for approach which is index based.
 * **Note**: You can use `SignalHistory[-1]` to achieve same effect as calling `SignalHistory.frame(-1)`
 * 
 */frame(relativeFrame: number): PrimitiveOrShaderSignal;

} 
