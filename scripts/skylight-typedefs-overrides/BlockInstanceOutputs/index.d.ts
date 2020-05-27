
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />

/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Reactive.PixelPointSignal/index.d.ts" />
/// <reference path="../Reactive.ShaderSignal/index.d.ts" />
declare interface BlockInstanceOutputs {
/** 
*  getBooleanOrFallback(name: String, fallback: BoolSignal): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` from the Block output with the given `name`. Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the output with that `name` is not of type `BoolSignal`.
 */getBooleanOrFallback(name: String, fallback: BoolSignal | boolean): BoolSignal
        ;

/** 
*  getPulseOrFallback(name: String, fallback: EventSource): EventSource
 *  
 * 
 * Returns a `EventSource` from the Block output with the given `name`. Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the output with that `name` is not of type `EventSource`.
 */getPulseOrFallback(name: String, fallback: EventSource): EventSource
        ;

/** 
*  
 * getScalar(name: String): Promise<ScalarSignal>
 *  
 * 
 * Returns a promise that is resolved with a `ScalarSignal` from the Block output with the given `name`. Fails the promise if no output with that `name` is present in the Block or if the output with that `name` is not of type `ScalarSignal`.
 */getScalar(name: String): Promise<ScalarSignal>
        ;

/** 
*  getScalarOrFallback(name: String, fallback: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` from the Block output with the given `name`. Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the output with that `name` is not of type `ScalarSignal`.
 */getScalarOrFallback(name: String, fallback: ScalarSignal | number): ScalarSignal
        ;

/** 
*  
 * getPoint2D(name: String): Promise<PixelPointSignal>
 *  
 * 
 * Returns a promise that is resolved with a `PixelPointSignal` from the Block output with the given `name`. Fails the promise if no output with that `name` is present in the Block or if the output with that `name` is not of type `PixelPointSignal`.
 */getPoint2D(name: String): Promise<PixelPointSignal>
        ;

/** 
*  
 * getBoolean(name: String): Promise<BoolSignal>
 *  
 * 
 * Returns a promise that is resolved with a `BoolSignal` from the Block output with the given `name`. Fails the promise if no output with that `name` is present in the Block or if the output with that `name` is not of type `BoolSignal`.
 */getBoolean(name: String): Promise<BoolSignal>
        ;

/** 
*  
 * getColor(name: String): Promise<ColorSignal>
 *  
 * 
 * Returns a promise that is resolved with a `ColorSignal` from the Block output with the given `name`. Fails the promise if no output with that `name` is present in the Block or if the output with that `name` is not of type `ColorSignal`.
 */getColor(name: String): Promise<ColorSignal>
        ;

/** 
*  
 * getString(name: String): Promise<StringSignal>
 *  
 * 
 * Returns a promise that is resolved with a `StringSignal` from the Block output with the given `name`. Fails the promise if no output with that `name` is present in the Block or if the output with that `name` is not of type `StringSignal`.
 */getString(name: String): Promise<StringSignal>
        ;

/** 
*  
 * getVector(name: String): Promise<VectorSignal>
 *  
 * 
 * Returns a promise that is resolved with a `VectorSignal` from the Block output with the given `name`. Fails the promise if no output with that `name` is present in the Block or if the output with that `name` is not of type `VectorSignal`.
 */getVector(name: String): Promise<VectorSignal>
        ;

/** 
*  getStringOrFallback(name: String, fallback: StringSignal): StringSignal
 *  
 * 
 * Returns a `StringSignal` from the Block output with the given `name`. Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the output with that `name` is not of type `StringSignal`.
 */getStringOrFallback(name: String, fallback: StringSignal | string): StringSignal
        ;

/** 
*  
 * getPoint(name: String): Promise<PointSignal>
 *  
 * 
 * Returns a promise that is resolved with a `PointSignal` from the Block output with the given `name`. Fails the promise if no output with that `name` is present in the Block or if the output with that `name` is not of type `PointSignal`.
 */getPoint(name: String): Promise<PointSignal>
        ;

/** 
*  
 * getPulse(name: String): Promise<EventSource>
 *  
 * 
 * Returns a promise that is resolved with a `EventSource` from the Block output with the given `name`. Fails the promise if no output with that `name` is present in the Block or if the output with that `name` is not of type `EventSource`.
 */getPulse(name: String): Promise<EventSource>
        ;

/** 
*  getPointOrFallback(name: String, fallback: PointSignal): PointSignal
 *  
 * 
 * Returns a `PointSignal` from the Block output with the given `name`. Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the output with that `name` is not of type `PointSignal`.
 */getPointOrFallback(name: String, fallback: PointSignal): PointSignal
        ;

/** 
*  getColorOrFallback(name: String, fallback: ColorSignal): ColorSignal
 *  
 * 
 * Returns a `ColorSignal` from the Block output with the given `name`. Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the output with that `name` is not of type `ColorSignal`.
 */getColorOrFallback(name: String, fallback: ColorSignal): ColorSignal
        ;

/** 
*  getVectorOrFallback(name: String, fallback: VectorSignal): VectorSignal
 *  
 * 
 * Returns a `VectorSignal` from the Block output with the given `name`. Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the output with that `name` is not of type `VectorSignal`.
 */getVectorOrFallback(name: String, fallback: VectorSignal): VectorSignal
        ;

/** 
*  getPoint2DOrFallback(name: String, fallback: PixelPointSignal): PixelPointSignal
 *  
 * 
 * Returns a `PixelPointSignal` from the Block output with the given `name`. Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the output with that `name` is not of type `PixelPointSignal`.
 */getPoint2DOrFallback(name: String, fallback: PixelPointSignal): PixelPointSignal
        ;

/** 
*  
 * getShader(name: String): Promise<ShaderSignal>
 *  
 * 
 * Returns a promise that is resolved with a `ShaderSignal` from the Block output with the given `name`. Fails the promise if no output with that `name` is present in the Block or if the output with that `name` is not of type `ShaderSignal`.
 */getShader(name: String): Promise<ShaderSignal>
        ;

/** 
*  getShaderOrFallback(name: String, fallback: ShaderSignal): ShaderSignal
 *  
 * 
 * Returns a `ShaderSignal` from the Block output with the given `name`. Returns the `fallback` if any error happens, such as if no output with that `name` is present in the Block, or if the output with that `name` is not of type `ShaderSignal`.
 */getShaderOrFallback(name: String, fallback: ShaderSignal): ShaderSignal
        ;

} 
