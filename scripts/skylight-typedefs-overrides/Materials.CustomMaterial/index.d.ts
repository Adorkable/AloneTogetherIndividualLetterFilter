
/// <reference path="../Reactive.ScalarValue/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/// <reference path="../Reactive.BoolValue/index.d.ts" />
/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
declare interface CustomMaterial {
/** 
*  
 * floatParameter(paramName: string): ScalarValue
 *  
 * 
 * Returns the `ScalarValue` value representing the shader parameter indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the material.
 * 
 * **See Also**: `CustomMaterial.setFloatParameter`.
 */floatParameter(paramName: string): ScalarValue;

/** 
*  
 * getFloatParameterOrFallback(paramName: string, fallback: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` associated with a given `paramName` or `fallback` if the param is not found in the material.
 * 
 * **See Also**: `CustomMaterial.getFloatParameter`, `CustomMaterial.setFloatParameter`.
 */getFloatParameterOrFallback(paramName: string, fallback: ScalarSignal | number): ScalarSignal;

/** 
*  
 * getFloatParameter(paramName: string): Promise<ScalarSignal>
 *  
 * 
 * Returns a promise that is resolved with the `ScalarSignal` associated with a given `paramName` or error if the param is not found in the material.
 * 
 * **See Also**: `CustomMaterial.getFloatParameterOrFallback`, `CustomMaterial.setFloatParameter`.
 */getFloatParameter(paramName: string): Promise<ScalarSignal>;

/** 
*  
 * boolParameter(paramName: string): BoolValue
 *  
 * 
 * Returns the Boolean value indicated by the `paramName` argument. An exception is thrown when the identifier isn't found in the material.
 * 
 * **See Also**: `CustomMaterial.setBoolParameter`.
 */boolParameter(paramName: string): BoolValue;

/** 
*  
 * setTexture(paramName: string, texture: TextureBase): Promise<void>
 *  
 * 
 * Specifies the value of the shader parameter indicated by the `paramName` argument.
 * Returns promise resolved with error if param for given `paramName` is not found in the material.
 * 
 * **See Also**: `CustomMaterial.getTexture`.
 */setTexture(paramName: string, texture: TextureBase): Promise<void>;

/** 
*  
 * setFloatParameter(paramName: string, source: ScalarSignal): Promise<void>
 *  
 * 
 * Specifies the value of the shader parameter indicated by the `paramName` argument.
 * Returns promise resolved with error if param for given `paramName` is not found in the material.
 * 
 * **See Also**: `CustomMaterial.getFloatParameter`, `CustomMaterial.getFloatParameterOrFallback`.
 */setFloatParameter(paramName: string, source: ScalarSignal | number): Promise<void>;

/** 
*  
 * getBoolParameterOrFallback(paramName: string, fallback: BoolSignal): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` associated with a given `paramName` or `fallback` if the param is not found in the material.
 * 
 * **See Also**: `CustomMaterial.getBoolParameter`, `CustomMaterial.setBoolParameter`.
 */getBoolParameterOrFallback(paramName: string, fallback: BoolSignal | boolean): BoolSignal;

/** 
*  
 * setBoolParameter(paramName: string, source: BoolSignal): Promise<void>
 *  
 * 
 * Specifies the value of the shader parameter indicated by the `paramName` argument.
 * Returns promise resolved with error if param for given `paramName` is not found in the material.
 * 
 * **See Also**: `CustomMaterial.getBoolParameter`, `CustomMaterial.getBoolParameterOrFallback`.
 */setBoolParameter(paramName: string, source: BoolSignal | boolean): Promise<void>;

/** 
*  
 * getBoolParameter(paramName: string): Promise<BoolSignal>
 *  
 * 
 * Returns a promise that is resolved with the `BoolSignal` associated with a given `paramName` or error if the param is not found in the material.
 * 
 * **See Also**: `CustomMaterial.setBoolParameter`, `CustomMaterial.getBoolParameterOrFallback`.
 */getBoolParameter(paramName: string): Promise<BoolSignal>;

/** 
*  
 * getTexture(paramName: string): Promise<TextureBase>
 *  
 * 
 * Returns a promise that is resolved with the `TextureBase` associated with a given `paramName` or error if the param is not found in the material.
 * 
 * **See Also**: `CustomMaterial.setTexture`.
 */getTexture(paramName: string): Promise<TextureBase>;

} 
