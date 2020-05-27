
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.EventSource/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Reactive.PixelPointSignal/index.d.ts" />
declare interface PatchesInputs {
/** 
*  
 * setScalar(name: String, signal: ScalarSignal): Promise<void>
 *  
 * 
 * Sends a `ScalarSignal` to the Patch Editor under specified `name`.
 * 
 * **Note**: 
 */setScalar(name: String, signal: ScalarSignal | number): Promise<void>
        ;

/** 
*  
 * setColor(name: String, signal: ColorSignal): Promise<void>
 *  
 * 
 * Sends a `ColorSignal` to the Patch Editor under specified `name`.
 * 
 * **Note**: 
 */setColor(name: String, signal: ColorSignal): Promise<void>
        ;

/** 
*  
 * setString(name: String, signal: StringSignal): Promise<void>
 *  
 * 
 * Sends a `StringSignal` to the Patch Editor under specified `name`.
 * 
 * **Note**: 
 */setString(name: String, signal: StringSignal | string): Promise<void>
        ;

/** 
*  
 * setBoolean(name: String, signal: BoolSignal): Promise<void>
 *  
 * 
 * Sends a `BoolSignal` to the Patch Editor under specified `name`.
 * 
 * **Note**: 
 */setBoolean(name: String, signal: BoolSignal | boolean): Promise<void>
        ;

/** 
*  
 * setPulse(name: String, signal: EventSource): Promise<void>
 *  
 * 
 * Sends a `EventSource` to the Patch Editor under specified `name`.
 * 
 * **Note**: The `Reactive.once()` method can be used to return an `EventSource` that emits an empty event as soon as possible.
 */setPulse(name: String, signal: EventSource): Promise<void>
        ;

/** 
*  
 * setPoint(name: String, signal: PointSignal): Promise<void>
 *  
 * 
 * Sends a `PointSignal` to the Patch Editor under specified `name`.
 * 
 * **Note**: 
 */setPoint(name: String, signal: PointSignal): Promise<void>
        ;

/** 
*  
 * setVector(name: String, signal: VectorSignal): Promise<void>
 *  
 * 
 * Sends a `VectorSignal` to the Patch Editor under specified `name`.
 * 
 * **Note**: 
 */setVector(name: String, signal: VectorSignal): Promise<void>
        ;

/** 
*  
 * setPoint2D(name: String, signal: PixelPointSignal): Promise<void>
 *  
 * 
 * Sends a `PixelPointSignal` to the Patch Editor under specified `name`.
 * 
 * **Note**: 
 */setPoint2D(name: String, signal: PixelPointSignal): Promise<void>
        ;

} 
