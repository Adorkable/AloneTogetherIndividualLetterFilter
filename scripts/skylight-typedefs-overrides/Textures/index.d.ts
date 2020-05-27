
/// <reference path="../Textures.TextureBase/index.d.ts" />

declare namespace TexturesModule {
/** 
*  
 * get(textureName: string): TextureBase
 *  
 * 
 * Returns a texture object, derived from `TextureBase`, that is specified by `textureName`. An exception is thrown when the texture isn't found in the project. Possible types are:
 * 
 *   * `CanvasTexture`
 *   * `ColorTexture`
 *   * `DeepLinkTexture`
 *   * `ExternalTexture`
 *   * `ImageTexture`
 *   * `SequenceTexture`
 * 
 * **See Also**: `TextureBase.name`.
 */function get(textureName: string): TextureBase;

/** 
*  
 * findUsingPattern(namePattern: string): Promise<Array<TextureBase>>
 * findUsingPattern(namePattern: string, config: {limit: number}): Promise<Array<TextureBase>>
 *  
 * 
 * Returns a promise that is resolved with the all of the textures matching the name pattern or empty array if none was found.
 * 
 * Pattern format:
 * `*` matches any characters sequence.
 * `\` can be used to include in pattern any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findUsingPattern("*")` will retrive all of the textures.
 * `findUsingPattern("*A")` will retrieve all of the textures suffixed with 'A'.
 * `findUsingPattern("A*")` will retrieve all of the textures prefixed with 'A'.
 * `findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the textures containing 'A',
 * 
 * `limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.
 * 
 * **See Also**: `Textures.getAll`, `Textures.findFirst`.
 */function findUsingPattern(namePattern: string): Promise<Array<TextureBase>>;

    function findUsingPattern(namePattern: string, config: { limit: number }): Promise<Array<TextureBase>>;

/** 
* 
 *  
 * getAll(): Promise<Array<TextureBase>>
 *  
 * 
 * Returns a promise that is resolved with all of the textures.
 * 
 * **See Also**: `Textures.findUsingPattern`, `Textures.findFirst`.
 * 
 */function getAll(): Promise<Array<TextureBase>>;

/** 
* 
 *  
 * findFirst(name: string): Promise<TextureBase>
 *  
 * 
 * Returns a promise that is resolved with the texture of a requested name or null if none was found.
 * 
 * **See Also**: `Textures.findUsingPattern`, `Textures.getAll`.
 * 
 */function findFirst(name: string): Promise<TextureBase>;

}
export = TexturesModule;