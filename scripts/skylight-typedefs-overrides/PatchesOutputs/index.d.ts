

/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Reactive.PixelPointSignal/index.d.ts" />
declare interface PatchesOutputs {
/** 
*  
 * getScalar(name: String): Promise<ScalarSignal>
 *  
 * 
 * Returns a promise that is resolved with a `ScalarSignal` existing in the Patch Editor under specified `name`.
 */getScalar(name: String): Promise<ScalarSignal>
        ;

/** 
*  getScalarOrFallback(name: String, fallback: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */getScalarOrFallback(name: String, fallback: ScalarSignal | number): ScalarSignal
        ;

/** 
*  
 * getPoint2D(name: String): Promise<PixelPointSignal>
 *  
 * 
 * Returns a promise that is resolved with a `PixelPointSignal` existing in the Patch Editor under specified `name`.
 */getPoint2D(name: String): Promise<PixelPointSignal>
        ;

/** 
*  
 * getBoolean(name: String): Promise<BoolSignal>
 *  
 * 
 * Returns a promise that is resolved with a `BoolSignal` existing in the Patch Editor under specified `name`.
 */getBoolean(name: String): Promise<BoolSignal>
        ;

/** 
*  
 * getString(name: String): Promise<StringSignal>
 *  
 * 
 * Returns a promise that is resolved with a `StringSignal` existing in the Patch Editor under specified `name`.
 */getString(name: String): Promise<StringSignal>
        ;

/** 
*  
 * getVector(name: String): Promise<VectorSignal>
 *  
 * 
 * Returns a promise that is resolved with a `VectorSignal` existing in the Patch Editor under specified `name`.
 */getVector(name: String): Promise<VectorSignal>
        ;

/** 
*  getStringOrFallback(name: String, fallback: StringSignal): StringSignal
 *  
 * 
 * Returns a `StringSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */getStringOrFallback(name: String, fallback: StringSignal | string): StringSignal
        ;

/** 
*  getPulseOrFallback(name: String, fallback: EventSource): EventSource
 *  
 * 
 * Returns a `EventSource` existing in the Patch Editor under specified `name` or `fallback` on error.
 */getPulseOrFallback(name: String, fallback: EventSource): EventSource
        ;

/** 
*  getBooleanOrFallback(name: String, fallback: BoolSignal): BoolSignal
 *  
 * 
 * Returns a `BoolSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */getBooleanOrFallback(name: String, fallback: BoolSignal | boolean): BoolSignal
        ;

/** 
*  
 * getPoint(name: String): Promise<PointSignal>
 *  
 * 
 * Returns a promise that is resolved with a `PointSignal` existing in the Patch Editor under specified `name`.
 */getPoint(name: String): Promise<PointSignal>
        ;

/** 
*  
 * getPulse(name: String): Promise<EventSource>
 *  
 * 
 * Returns a promise that is resolved with a `EventSource` existing in the Patch Editor under specified `name`.
 */getPulse(name: String): Promise<EventSource>
        ;

/** 
*  getPointOrFallback(name: String, fallback: PointSignal): PointSignal
 *  
 * 
 * Returns a `PointSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */getPointOrFallback(name: String, fallback: PointSignal): PointSignal
        ;

/** 
*  getColorOrFallback(name: String, fallback: ColorSignal): ColorSignal
 *  
 * 
 * Returns a `ColorSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */getColorOrFallback(name: String, fallback: ColorSignal): ColorSignal
        ;

/** 
*  getVectorOrFallback(name: String, fallback: VectorSignal): VectorSignal
 *  
 * 
 * Returns a `VectorSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */getVectorOrFallback(name: String, fallback: VectorSignal): VectorSignal
        ;

/** 
*  
 * getColor(name: String): Promise<ColorSignal>
 *  
 * 
 * Returns a promise that is resolved with a `ColorSignal` existing in the Patch Editor under specified `name`.
 */getColor(name: String): Promise<ColorSignal>
        ;

/** 
*  getPoint2DOrFallback(name: String, fallback: PixelPointSignal): PixelPointSignal
 *  
 * 
 * Returns a `PixelPointSignal` existing in the Patch Editor under specified `name` or `fallback` on error.
 */getPoint2DOrFallback(name: String, fallback: PixelPointSignal): PixelPointSignal
        ;

} 
