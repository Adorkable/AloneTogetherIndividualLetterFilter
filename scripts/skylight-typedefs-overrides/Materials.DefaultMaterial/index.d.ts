/// <reference path="../Textures.TextureBase/index.d.ts" />
/// <reference path="../Materials.TextureTransform/index.d.ts" />
/// <reference path="../Signal<Materials.BlendMode>/index.d.ts" />

declare interface DefaultMaterial {
  /** 
  * ```
  (get) reflective: TextureBase
  (set) reflective: TextureBase
  ```
  
  Specifies the reflective texture of the material.
  */
  reflective: TextureBase;
  /** 
  * ```
  (get) multiply: TextureBase
  (set) multiply: TextureBase
  ```
  
  Specifies the multiplicative texture of the material. This can be used for masking and other purposes.
  */
  multiply: TextureBase;
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
    (get) emissiveTextureTransform: TextureTransform
    (set) emissiveTextureTransform: TextureTransformSignal
    ```
  
    Specifies the coordinates transform of the emissive texture of this material.
  */
  emissiveTextureTransform: TextureTransform;
  /** 
  * ```
  (get) multiplyTextureTransform: TextureTransform
  (set) multiplyTextureTransform: TextureTransformSignal
  ```
  
  Specifies the coordinates transform of the multiplicative texture of this material.
  */
  multiplyTextureTransform: TextureTransform;
  /** 
  * ```
  (get) blendMode: Signal<MaterialsModule.BlendMode>
  (set) blendMode: Signal<MaterialsModule.BlendMode>
  ```
  
  Specifies the material blend mode.
  */
  blendMode: BlendMode>;
/** 
*  
 * getReflective(): Promise<TextureBase>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */getReflective(): Promise<TextureBase>
 ;

/** 
*  
 * getMultiply(): Promise<TextureBase>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */getMultiply(): Promise<TextureBase>
 ;

/** 
*  
 * getEmissive(): Promise<TextureBase>
 *  
 * 
 * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
 */getEmissive(): Promise<TextureBase>
 ;

} 
