/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.Point2D/index.d.ts" />

/// <reference path="../Scene.PlaneType/index.d.ts" />
/// <reference path="../Reactive.PixelPointSignal/index.d.ts" />
declare interface LineBasedPlaneTracker {
    /** 
    * ```
    (get) planeType: StringSignal
    (set) (Not Available)
    ```
    
    Returns type of the plane.
    This value indicates if no plane is tracked, or whether the tracked plane is vertical or horizontal.
    Possible values:
    - NONE
    - HORIZONTAL_FLOOR
    - HORIZONTAL_CEILING
    - VERTICAL
    */
    planeType: StringSignal;
/** 
*  
 *          resetPlane(screenLocation: Point2D): void
 *          resetPlane(screenX: number, screenY: number): void
 *          resetPlane(screenLocation: Point2D, planeType : PlaneType): void
 *          resetPlane(screenX: number, screenY: number, planeType : PlaneType): void
 *           
 * 
 *          Sets a new plane or resets an existing plane in 3d space.
 *          The 3d plane will be centered along the viewing ray defined by the given screen coordinate.
 *          The position of the plane is constantly tracked.
 *          This object's transform will be modified.
 * 
 *           
 *          TouchGestures.onTap().subscribe(function(gesture) {
 *            lineBasedTracker.resetPlane(gesture.location, PlaneType.HORZONTAL);
 *          });
 *           
 */resetPlane(screenLocation: Point2D): void
        ;

    resetPlane(screenX: number, screenY: number): void
        ;

    resetPlane(screenLocation: Point2D, planeType: PlaneType): void
        ;

    resetPlane(screenX: number, screenY: number, planeType: PlaneType): void
        ;

/** 
*  
 * movePlane(screenLocation: Point2D): void
 * movePlane(screenX: number, screenY: number): void
 * movePlane(screenLocation: PixelPointSignal, gestureState: StringSignal): void
 *  
 * 
 * Moves this object along an existing 3d plane.
 * The 3d plane will be centered along the viewing ray defined by the given screen coordinate.
 * This object's transform will be modified.
 * 
 *  
 * TouchGestures.onPan().subscribe(function(gesture) {
 *   lineBasedTracker.movePlane(gesture.location);
 * });
 *  
 */movePlane(screenLocation: Point2D): void
        ;

    movePlane(screenX: number, screenY: number): void
        ;

    movePlane(screenLocation: PixelPointSignal, gestureState: StringSignal | string): void
        ;

/** 
*  
 * removePlane(): void
 *  
 * 
 * Removes an existing 3d plane and does not track the position anymore.
 * 
 *  
 * TouchGestures.onTap().subscribe(function(gesture) {
 *   lineBasedTracker.removePlane();
 * });
 *  
 */removePlane(): void
        ;

} 
