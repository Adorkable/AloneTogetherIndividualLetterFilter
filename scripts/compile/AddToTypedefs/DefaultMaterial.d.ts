/**
The`DefaultMaterial` class encapsulates an image - based material.
*/
declare interface DefaultMaterial {
    blendMode: any//Signal<MaterialsModule.BlendMode>
    /**
        ```
            (get) blendMode: Signal<MaterialsModule.BlendMode>
            (set) blendMode: Signal<MaterialsModule.BlendMode>
            ```
    
    Specifies the material blend mode.
    */
    emissive: TextureBase
    /**
        ```
            (get) emissive: TextureBase
            (set) emissive: TextureBase
            ```
    
    Specifies the emissive texture of the material.
    */
    getEmissiveTextureTransform(): any //TextureTransform
    setEmissiveTextureTransform(): any //TextureTransformSignal
    /**
        ```
              (get) emissiveTextureTransform: TextureTransform
              (set) emissiveTextureTransform: TextureTransformSignal
              ```
    
    Specifies the coordinates transform of the emissive texture of this material.
    */
    multiply: TextureBase
    /**
        ```
            (get) multiply: TextureBase
            (set) multiply: TextureBase
            ```
    
    Specifies the multiplicative texture of the material.This can be used for masking and other purposes.
    */
    getMultiplyTextureTransform(): any //TextureTransform
    setMultiplyTextureTransform(): any //TextureTransformSignal
    /**
        ```
            (get) multiplyTextureTransform: TextureTransform
            (set) multiplyTextureTransform: TextureTransformSignal
            ```
    
    Specifies the coordinates transform of the multiplicative texture of this material.
    */
    reflective: TextureBase
    /**
        ```
            (get) reflective: TextureBase
            (set) reflective: TextureBase
            ```
    
    Specifies the reflective texture of the material.
    */
    getEmissive(): Promise<TextureBase>
    /**
        ```
            getEmissive(): Promise<TextureBase>
            ```
    
    Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
    */
    getMultiply(): Promise<TextureBase>
    /**
        ```
            getMultiply(): Promise<TextureBase>
            ```
    
    Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
    */
    getReflective(): Promise<TextureBase>
    /**
        ```
            getReflective(): Promise<TextureBase>
            ```
    
    Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
    */

}