/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
/// <reference path="../Reactive.ColorSignal/index.d.ts" />
/// <reference path="../Signal<Materials.BlendMode>/index.d.ts" />

declare interface MetallicRoughnessPbrMaterial {
    /** 
    * ```
    (get) emissive: TextureBase
    (set) emissive: TextureBase
    ```
    
    Specifies the emissive texture of the material.
    */
    emissive: TextureBase;
    /** 
    * ```
    (get) metallicFactor: ScalarSignal
    (set) metallicFactor: ScalarSignal
     ```
    Specifies the metallic factor.
    */
    metallicFactor: ScalarSignal;
    /** 
    * ```
    (get) emissiveTextureTransform: TextureTransform
    (set) emissiveTextureTransform: TextureTransformSignal
    ```
    
    Specifies the coordinates transform of the emissive texture of this material.
    */
    emissiveTextureTransform: TextureTransform;
    /** 
    * ```
    (get) (Not Available)
    (set) baseColorFactor: ColorSignal
    ```
    Specifies a `ColorSignal` for a base color factor. A `ColorSignal` may be created using the `RGBA()` and `HSVA()` methods of the `Reactive` module.
    **See Also**: `ReactiveModule.RGBA` and `ReactiveModule.HSVA`.
    */
    baseColorFactor: ColorSignal;
    /** 
    * ```
    (get) roughnessFactor: ScalarSignal
    (set) roughnessFactor: ScalarSignal
    ```
    Specifies the roughness factor.
    */
    roughnessFactor: ScalarSignal;
    /** 
    * ```
    (get) (Not Available)
    (set) baseColor: TextureBase
    ```
    
    Specifies the baseColor texture of the material.
    */
    baseColor: TextureBase;
    /** 
    * ```
    (get) blendMode: Signal<MaterialsModule.BlendMode>
    (set) blendMode: Signal<MaterialsModule.BlendMode>
    ```
    
    Specifies the material blend mode.
    */
    blendMode: BlendMode;
    /** 
    * ```
    (get) baseColorTextureTransform: TextureTransform
    (set) baseColorTextureTransform: TextureTransformSignal
    ```
    
    Specifies the coordinates transform of the baseColorFactor texture of this material.
    */
    baseColorTextureTransform: TextureTransform;
    /** 
    * ```
    (get) metallicRoughnessTextureTransform: TextureTransform
    (set) metallicRoughnessTextureTransform: TextureTransformSignal
    ```
    
    Specifies the coordinates transform of the metallicRoughness texture of this material.
    */
    metallicRoughnessTextureTransform: TextureTransform;
    /** 
    * ```
    (get) (Not Available)
    (set) metallicRoughness: TextureBase
    ```
    
    Specifies the metallicRoughness texture of the material.
    */
    metallicRoughness: TextureBase;
/** 
*  
 * getEmissive(): Promise<TextureBase>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */getEmissive(): Promise<TextureBase>
        ;

/** 
*  
 * getBaseColor(): Promise<TextureBase>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */getBaseColor(): Promise<TextureBase>
        ;

/** 
*  
 * getMetallicRoughness(): Promise<TextureBase>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */getMetallicRoughness(): Promise<TextureBase>
        ;

} 
