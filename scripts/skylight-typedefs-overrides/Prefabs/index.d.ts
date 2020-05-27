
/// <reference path="../PrefabBase/index.d.ts" />

declare namespace PrefabsModule {
/** 
*  
 * get(prefabName: string): PrefabBase
 *  
 * 
 * Returns a prefab object, derived from `PrefabBase`, that is specified by `prefabName`. An exception is thrown when prefab isn't found. At the moment we have only one type:
 * 
 *   * `PrefabGltf`
 * 
 * **See Also**: `PrefabBase.name`.
 */function get(prefabName: string): PrefabBase;

/** 
*  
 * findUsingPattern(namePattern: string): Promise<Array<PrefabBase>>
 * findUsingPattern(namePattern: string, config: {limit: number}): Promise<Array<PrefabBase>>
 *  
 * 
 * Returns a promise that is resolved with the all of the prefabs matching the name pattern or empty array if none was found.
 * 
 * Pattern format:
 * `*` matches any characters sequence.
 * `\` can be used to include in pattern any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findUsingPattern("*")` will retrive all of the prefabs.
 * `findUsingPattern("*A")` will retrieve all of the prefabs suffixed with 'A'.
 * `findUsingPattern("A*")` will retrieve all of the prefabs prefixed with 'A'.
 * `findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the prefabs containing 'A',
 * 
 * `limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.
 * 
 * **See Also**: `Prefabs.getAll`, `Prefabs.findFirst`.
 */function findUsingPattern(namePattern: string): Promise<Array<PrefabBase>>;

    function findUsingPattern(namePattern: string, config: { limit: number }): Promise<Array<PrefabBase>>;

/** 
* 
 *  
 * getAll(): Promise<Array<PrefabBase>>
 *  
 * 
 * Returns a promise that is resolved with all of the prefabs.
 * **See Also**: `Prefabs.findUsingPattern`, `Prefabs.findFirst`.
 *           
 */function getAll(): Promise<Array<PrefabBase>>;

/** 
* 
 *  
 * findFirst(name: string): Promise<PrefabBase>
 *  
 * 
 * Returns a promise that is resolved with the prefab of a requested name or null if none was found.
 * **See Also**: `Prefabs.findUsingPattern`, `Prefabs.getAll`.
 *           
 */function findFirst(name: string): Promise<PrefabBase>;

}
export = PrefabsModule;