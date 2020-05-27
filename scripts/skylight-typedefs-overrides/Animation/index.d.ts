/// <reference path="../Animation.SamplerFactory/index.d.ts" />
/// <reference path="../Animation.TimeDriver/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Animation.SignalRecorder/index.d.ts" />

/// <reference path="../Animation.ValueDriver/index.d.ts" />
/// <reference path="../Animation.Driver/index.d.ts" />
/// <reference path="../Animation.ScalarSampler/index.d.ts" />
/// <reference path="../Animation.ArrayOfScalarSamplers/index.d.ts" />
/// <reference path="../Animation.RotationSampler/index.d.ts" />
/// <reference path="../Animation.ColorSampler/index.d.ts" />
/// <reference path="../Animation.ArrayOfScalarSignals/index.d.ts" />
/// <reference path="../Reactive.RotationSignal/index.d.ts" />
/// <reference path="../Reactive.RgbaSignal/index.d.ts" />
declare namespace AnimationModule {
    /** 
    * 
    ```
    (get) samplers: SamplerFactory
    (set) (Not Available)
    ```
    
    Specifies an instance of a `SamplerFactory` object.
    
    */
    const samplers: SamplerFactory;
/** 
*  
 * timeDriver(timeDriverParams: {durationMilliseconds: number, loopCount: number | void, mirror: boolean | void}): TimeDriver
 *  
 * 
 * Returns a `TimeDriver` object that drives an animation for the specified parameters.
 * `loopCount` defines the number of iterations before the time driver stops; this can be infinity.
 * When `mirror` is `TRUE`, the time driver follows a *yoyo* effect with every odd iteration going forwards and every even iteration going backwards.
 */function timeDriver(timeDriverParams: { durationMilliseconds: number, loopCount: number | void, mirror: boolean | void }): TimeDriver
        ;

/** 
*  
 * makeSignalRecorder(targetSignal: ScalarSignal): SignalRecorder
 * makeSignalRecorder(targetSignal: ScalarSignal, recordingSignalParams: {minRecordingGapMs: number | void, maxRecordCount: number | void}): SignalRecorder
 *  
 * 
 * Begins recording a scalar signal (targetSignal) for use in a sampler. This returns a SignalRecorder object that returns a SignalRecord when stopped.
 * 
 * minRecordingGapMs and maxRecordCount are included for performance reasons: minRecordingGapMs defines the minimum amount of delay between snapshots taken in ms while maxRecordCount defines the maximum number of snapshots. maxRecordCount must be > 0. If these two values are not included, a default of 10 is used for minRecordingGapMs and 1000 is used for maxRecordCount.
 */function makeSignalRecorder(targetSignal: ScalarSignal | number): SignalRecorder
        ;

    function makeSignalRecorder(targetSignal: ScalarSignal | number, recordingSignalParams: { minRecordingGapMs: number | void, maxRecordCount: number | void }): SignalRecorder
        ;

/** 
*  
 * valueDriver(value: ScalarSignal, min: number, max: number): ValueDriver
 *  
 * 
 * Returns a `ValueDriver` object that drives an animation based on values emitted from a `ScalarValue`. The signal values are normalized and clamped to maximum and minimum values.
 */function valueDriver(value: ScalarSignal | number, min: number, max: number): ValueDriver
        ;

/** 
* 
 *  
 * animate(driver: Driver, sampler: ScalarSampler): ScalarSignal
 * animate(driver: Driver, sampler: ArrayOfScalarSamplers): ArrayOfScalarSignals
 * animate(driver: Driver, sampler: RotationSampler): RotationSignal
 * animate(driver: Driver, sampler: ColorSampler): RgbaSignal
 *  
 * 
 * Combines the driver and the sampler to create a signal that can be used to animate arbitrary properties of arbitrary objects.
 * 
 * For `TimeDriver`-based animations the animation will start only when `TimeDriver.start` is invoked.
 * 
 */function animate(driver: Driver, sampler: ScalarSampler): ScalarSignal
        ;

    function animate(driver: Driver, sampler: ArrayOfScalarSamplers): ArrayOfScalarSignals
        ;

    function animate(driver: Driver, sampler: RotationSampler): RotationSignal
        ;

    function animate(driver: Driver, sampler: ColorSampler): RgbaSignal
        ;

}
export = AnimationModule;