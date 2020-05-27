/// <reference path="../Reactive.EulerAnglesSignal/index.d.ts" />


/// <reference path="../RotationSignalHistory/index.d.ts" />
declare interface RotationSignal {
    /** 
    * ```
    (get) eulerAngles: EulerAnglesSignal
    (set) (Not Available)
    ```
    Represents the Euler angle from the `RotationSignal`.
    
    **Note**: the order of rotations for the Euler angles is the same as in `Transformation` class.
    */
    eulerAngles: EulerAnglesSignal;
/** 
*  
 * history(framesCount: number): RotationSignalHistory
 * history(framesCount: number, initialValues: Array<Rotation>): RotationSignalHistory
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 */history(framesCount: number): RotationSignalHistory
        ;

    history(framesCount: number, initialValues: Array<Rotation>): RotationSignalHistory
        ;

} 
