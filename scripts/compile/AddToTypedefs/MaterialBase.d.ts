/**
The`DefaultMaterial` class encapsulates an image - based material.
*/
declare interface MaterialBase {
    /**
     * Specifies a number between 0.0 and 1.0.
     */
    alphaCutoff: ScalarSignal
    /*

    cullMode

    (get) cullMode: Signal<MaterialsModule.CullMode>
        (set) cullMode: Signal < MaterialsModule.CullMode >
            Specifies the material cull mode.
*/

    /**
     * Specifies the texture that forms the basis of this material.
    */
    diffuse: TextureBase

    /** 
     * Specifies the coordinates transform of the diffuse texture of this material.
     */
    // getDiffuseTextureTransform(): TextureTransform
    // setDiffuseTextureTransform(): TextureTransformSignal

    /**
     * Indicates whether the material can be seen from both sides when rendering the scene.

     * Note: When FALSE, only the side specified by object's Cull Mode is rendered.
     */
    doubleSided: BoolSignal

    /**
     * Specifies the unique identifier for the material. 
    */
    getIdentifier(): string

    /**        
    * Specifies the unique identifier for the material name.This value is specified in AR Studio at design time.
            
    * See Also: MaterialsModule.get.
    */
    getName(): string

    /**
    * (get) opacity: ScalarSignal
    * (set) opacity: ScalarSignal
    * Specifies a number between 0.0 and 1.0 indicating the opacity threshold for discarding pixels. 0 is transparent and 1 is opaque.
    */
    opacity: ScalarSignal

    /**
     * Returns a promise that is resolved with the texture associated with a given material or null if no texture was assigned.
     */
    getDiffuse(): Promise<TextureBase>

    /** Assigns a ShaderSignal to the specified texture slot. */
    // setTexture(signal: ShaderSignal, config: {
    //     textureSlotName: DefaultMaterialTextures | BlendedMaterialTextures | FacePaintMaterialTextures | PhysicallyBasedMaterialTextures
    // }): void

    /** Assigns a ShaderSignal to the specified texture slot. */
    setTextureSlot(textureSlotName: String, signal: ShaderSignal): void
}