
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.PixelPointSignal/index.d.ts" />
declare interface BlockInstanceInputs {
/** 
*  
 * setScalar(name: String, signal: ScalarSignal): Promise<void>
 *  
 * 
 * Sends a `ScalarSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled if the operation succeeds and is rejected if the operation fails, such as if no input exists with the given name, or if the input's type is not a `ScalarSignal`.
 */setScalar(name: String, signal: ScalarSignal | number): Promise<void>
        ;

/** 
*  
 * setColor(name: String, signal: ColorSignal): Promise<void>
 *  
 * 
 * Sends a `ColorSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled if the operation succeeds and is rejected if the operation fails, such as if no input exists with the given name, or if the input's type is not a `ColorSignal`.
 */setColor(name: String, signal: ColorSignal): Promise<void>
        ;

/** 
*  
 * setString(name: String, signal: StringSignal): Promise<void>
 *  
 * 
 * Sends a `StringSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled if the operation succeeds and is rejected if the operation fails, such as if no input exists with the given name, or if the input's type is not a `StringSignal`.
 */setString(name: String, signal: StringSignal | string): Promise<void>
        ;

/** 
*  
 * setBoolean(name: String, signal: BoolSignal): Promise<void>
 *  
 * 
 * Sends a `BoolSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled if the operation succeeds and is rejected if the operation fails, such as if no input exists with the given name, or if the input's type is not a `BoolSignal`.
 */setBoolean(name: String, signal: BoolSignal | boolean): Promise<void>
        ;

/** 
*  
 * setShader(name: String, signal: ShaderSignal): Promise<void>
 *  
 * 
 * Sends a `ShaderSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled if the operation succeeds and is rejected if the operation fails, such as if no input exists with the given name, or if the input's type is not a `ShaderSignal`.
 */setShader(name: String, signal: ShaderSignal): Promise<void>
        ;

/** 
*  
 * setPoint(name: String, signal: PointSignal): Promise<void>
 *  
 * 
 * Sends a `PointSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled if the operation succeeds and is rejected if the operation fails, such as if no input exists with the given name, or if the input's type is not a `PointSignal`.
 */setPoint(name: String, signal: PointSignal): Promise<void>
        ;

/** 
*  
 * setVector(name: String, signal: VectorSignal): Promise<void>
 *  
 * 
 * Sends a `VectorSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled if the operation succeeds and is rejected if the operation fails, such as if no input exists with the given name, or if the input's type is not a `VectorSignal`.
 */setVector(name: String, signal: VectorSignal): Promise<void>
        ;

/** 
*  
 * setPulse(name: String, signal: EventSource): Promise<void>
 *  
 * 
 * Sends a `EventSource` to the Block's input with the given `name`. Returns a promise that is fulfilled if the operation succeeds and is rejected if the operation fails, such as if no input exists with the given name, or if the input's type is not a `EventSource`.
 */setPulse(name: String, signal: EventSource): Promise<void>
        ;

/** 
*  
 * setPoint2D(name: String, signal: PixelPointSignal): Promise<void>
 *  
 * 
 * Sends a `PixelPointSignal` to the Block's input with the given `name`. Returns a promise that is fulfilled if the operation succeeds and is rejected if the operation fails, such as if no input exists with the given name, or if the input's type is not a `PixelPointSignal`.
 */setPoint2D(name: String, signal: PixelPointSignal): Promise<void>
        ;

} 
