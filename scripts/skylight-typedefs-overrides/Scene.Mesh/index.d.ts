/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Scene.BlendShapesMesh/index.d.ts" />


declare interface Mesh {
    /** 
    * ```
    (get) material: MaterialBase
    (set) material: MaterialBase
    ```
    
    Specifies the material of the scene object.
    This method will throw an error if multiple materials are associated with different surfaces of the mesh.
    */
    material: MaterialBase;
    /** 
    * ```
    (get) blendShapes: BlendShapesMesh
    (set) (Not Available)
    ```
    
    Returns the set of blendshapes that this mesh contains.
    */
    blendShapes: BlendShapesMesh;
    /** 
    * ```
    (get) materialIdentifier: string
    (set) (Not Available)
    ```
    
    Specifies the unique id of material for Mesh.
    */
    materialIdentifier: string;
    /** 
    * ```
    (get) prefabName: string
    (set) (Not Available)
    ```
    
    Specifies the name of prefab for Mesh. This is the unique identifier of the prefab.
    */
    prefabName: string;
/** 
*  
 * getMaterial(): Promise<MaterialBase>
 *  
 * 
 * Returns a promise that is resolved with the material associated with a given mesh object or null if no material was assigned.
 * This method will return an error if multiple materials are associated with different surfaces of the mesh.
 */getMaterial(): Promise<MaterialBase>
        ;

/** 
*  
 * getBlendShapes(): Promise<Array<BlendShape>>
 *  
 * 
 * Returns a `JS Promise` which will be fulfilled with `array of blend Shapes` or an error.
 */getBlendShapes(): Promise<Array<BlendShape>>
        ;

} 
