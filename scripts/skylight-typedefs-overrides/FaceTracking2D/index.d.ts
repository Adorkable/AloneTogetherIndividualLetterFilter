/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/// <reference path="../FaceTracking2D.Face2D/index.d.ts" />
declare namespace FaceTracking2DModule {
    /** 
    * ```
    (get) count: ScalarSignal
    (set) (Not Available)
    ```
    
    Returns a `ScalarSignal` representing the number of faces tracked in the scene.
    */
    const count: ScalarSignal;
/** 
*  
 * face(index: number): Face2D
 *  
 * 
 * Returns the `Face2D` object from the detected face array at the specified index.
 */function face(index: number): Face2D
        ;

}
export = FaceTracking2DModule;