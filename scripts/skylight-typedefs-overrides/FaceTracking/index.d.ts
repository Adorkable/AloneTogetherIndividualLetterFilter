/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/// <reference path="../FaceTracking.Face/index.d.ts" />
declare namespace FaceTrackingModule {
    /** 
    * ```
    (get) count: ScalarSignal
    (set) (Not Available)
    ```
    
    Returns a `ScalarSignal` representing the number of faces tracked in the scene.
    */
    const count: ScalarSignal;
    /** 
    * ```
    (get) (Not Available)
    (set) isEnabled: void
    ```
    
    Specifies a `BoolSignal` that takes the value of `true` whenever the Face Tracker should be run, and the value of `false` otherwise. Default value is `true`.
    */
    const isEnabled: void;
/** 
*  
 * face(index: number): Face
 *  
 * 
 * Returns the `Face` object from the detected face array at the specified index.
 */function face(index: number): Face
        ;

}
export = FaceTrackingModule;