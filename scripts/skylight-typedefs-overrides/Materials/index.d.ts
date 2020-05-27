/// <reference path="../Materials.ShaderProcessor/index.d.ts" />

/// <reference path="../Materials.MaterialBase/index.d.ts" />

declare namespace MaterialsModule {
    /** 
    * ```
    (get) preProcessor: ShaderProcessor
    (set) (Not Available)
    ```
    
    Specifies the `ShaderProcessor` object used for the pre-rendering pass.
    */
    const preProcessor: ShaderProcessor;
    /** 
    * ```
    (get) postProcessor: ShaderProcessor
    (set) (Not Available)
    ```
    
    Specifies the `ShaderProcessor` object used for the post-rendering pass.
    */
    const postProcessor: ShaderProcessor;
/** 
*  
 * get(materialName: string): MaterialBase
 *  
 * 
 * Returns a `MaterialBase` class that represents the material specified by the `materialName` parameter. The materials are defined in the AR Studio project.
 * 
 * An exception is thrown when the identifier isn't found in the project.
 * 
 * **See Also**: `MaterialBase.name`.
 */function get(materialName: string): MaterialBase;

/** 
*  
 * findUsingPattern(namePattern: string): Promise<Array<MaterialBase>>
 * findUsingPattern(namePattern: string, config: {limit: number}): Promise<Array<MaterialBase>>
 *  
 * 
 * Returns a promise that is resolved with the all of the materials matching the name pattern or empty array if none was found.
 * 
 * Pattern format:
 * `*` matches any characters sequence.
 * `\` can be used to include in pattern any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findUsingPattern("*")` will retrive all of the materials.
 * `findUsingPattern("*A")` will retrieve all of the materials suffixed with 'A'.
 * `findUsingPattern("A*")` will retrieve all of the materials prefixed with 'A'.
 * `findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the materials containing 'A',
 * 
 * `limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.
 * 
 * **See Also**: `Materials.getAll`, `Materials.findFirst`.
 */function findUsingPattern(namePattern: string): Promise<Array<MaterialBase>>;

    function findUsingPattern(namePattern: string, config: { limit: number }): Promise<Array<MaterialBase>>;

/** 
* 
 *  
 * getAll(): Promise<Array<MaterialBase>>
 *  
 * 
 * Returns a promise that is resolved with all of the materials.
 * 
 * **See Also**: `Materials.findUsingPattern`, `Materials.findFirst`.
 * 
 */function getAll(): Promise<Array<MaterialBase>>;

/** 
* 
 *  
 * findFirst(name: string): Promise<MaterialBase>
 *  
 * 
 * Returns a promise that is resolved with the material of a requested name or null if none was found.
 * 
 * **See Also**: `Materials.findUsingPattern`, `Materials.getAll`.
 * 
 */function findFirst(name: string): Promise<MaterialBase>;

}
export = MaterialsModule;