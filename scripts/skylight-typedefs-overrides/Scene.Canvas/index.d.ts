/// <reference path="../Signal<Scene.RenderMode>/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Scene.RenderMode/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Scene.Bounds2D/index.d.ts" />
/// <reference path="../Signal/index.d.ts" />
declare interface Canvas {
    /** 
    * ```
    (get) mode: Signal<SceneModule.RenderMode>
    (set) mode: Signal<SceneModule.RenderMode>
    ```
    
    Specifies how Canvas should be rendered.
    In SCREEN_SPACE mode, Canvas is automatically placed and sized to fit the screen, `width` and `height` properties are ignored. `transform` property is still used, it is applied on top of the focal plane transform.
    In WORLD_SPACE Canvas behaves as regular 3D object and is sized according to `width` and `height` properties.
    
    **Note:** on invalid value provided in setter, the mode will default to SCREEN_SPACE. Use `setMode` method to specify custom fallback value.
    
    **See Also**: `Canvas.setMode`.
    */
    mode: RenderMode;
    /** 
    * ```
    (get) width: ScalarSignal
    (set) width: ScalarSignal
    ```
    
    Specifies the horizontal size, in 3D units.
    **Note:** this is only effective when `renderMode` property is set to WORLD_SPACE.
    */
    width: ScalarSignal;
    /** 
    * ```
    (get) renderMode: SceneModule.RenderMode
    (set) renderMode: SceneModule.RenderMode
    ```
    
    Specifies how Canvas should be rendered.
    In SCREEN_SPACE mode, Canvas is automatically placed and sized to fit the screen, `width` and `height` properties are ignored. `transform` property is still used, it is applied on top of the focal plane transform.
    In WORLD_SPACE Canvas behaves as regular 3D object and is sized according to `width` and `height` properties.
    */
    renderMode: RenderMode;
    /** 
    * ```
    (get) height: ScalarSignal
    (set) height: ScalarSignal
    ```
    
    Specifies the vertical size, in 3D units.
    **Note:** this is only effective when `renderMode` property is set to WORLD_SPACE.
    */
    height: ScalarSignal;
    /** 
    * ```
    (get) useSafeAreaMargins: BoolSignal
    (set) useSafeAreaMargins: BoolSignal
    ```
    
    Specifies if Canvas should automatically include SafeArea margin to its content.
    **Note:** this is only effective when `renderMode` property is set to SCREEN_SPACE.
    */
    useSafeAreaMargins: BoolSignal;
    /** 
    * 
    ```
    (get) bounds: Bounds2D
    (set) (Not Available)
    ```
    
    Represents the current 2D bounds relative to the parent element. This is the result of the layout calculation. Values are measured in 3D units.
    
    **Note**: The `Canvas.transform` property doesn't affect the layout, the transformation it specifies is applied on top of it.
    
    */
    bounds: Bounds2D;
/** 
*  
 * void setMode(mode: Signal<SceneModule.RenderMode>): void
 * void setMode(mode: Signal<SceneModule.RenderMode>, config { fallback: SceneModule.RenderMode }): void
 *  
 * 
 * Specifies how Canvas should be rendered.
 * In SCREEN_SPACE mode, Canvas is automatically placed and sized to fit the screen, `width` and `height` properties are ignored. `transform` property is still used, it is applied on top of the focal plane transform.
 * In WORLD_SPACE Canvas behaves as regular 3D object and is sized according to `width` and `height` properties.
 * 
 * **Note:** on invalid value provided in setter, the mode will default to `fallback` (or SCREEN_SPACE if fallback is not specified).
 * 
 * **See Also**: `Canvas.mode`.
 */setMode(mode: Signal<SceneModule.RenderMode>): void;

    setMode(mode: Signal<SceneModule.RenderMode>, config: { fallback: SceneModule.RenderMode }): void;

} 
