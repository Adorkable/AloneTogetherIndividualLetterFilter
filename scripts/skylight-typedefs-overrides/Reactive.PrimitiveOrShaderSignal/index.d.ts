
/// <reference path="../PrimitiveOrShaderSignalHistory/index.d.ts" />
declare interface PrimitiveOrShaderSignal {
/** 
*  
 * history(framesCount: number): PrimitiveOrShaderSignalHistory
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 */history(framesCount: number): PrimitiveOrShaderSignalHistory;

} 
