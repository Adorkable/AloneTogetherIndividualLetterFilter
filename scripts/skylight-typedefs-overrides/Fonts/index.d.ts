
/// <reference path="../Fonts.FontId/index.d.ts" />

declare namespace FontsModule {
/** 
*  
 * get(fontName: string): FontId
 *  
 * 
 * Returns a font object identified by the `fontName` argument.
 * 
 * Throws an exception if there is no such font in the project.
 */function get(fontName: string): FontId
        ;

/** 
*  
 * findUsingPattern(namePattern: string): Promise<Array<FontId>>
 * findUsingPattern(namePattern: string, config: {limit: number}): Promise<Array<FontId>>
 *  
 * 
 * Returns a promise that is resolved with the all of the font identifiers matching the name pattern or empty array if none was found.
 * 
 * Pattern format:
 * `*` matches any characters sequence.
 * `\` can be used to include in pattern any of the control characters (including '\' itself)
 * 
 * Examples:
 * `findUsingPattern("*")` will retrive all of the font identifiers.
 * `findUsingPattern("*A")` will retrieve all of the font identifiers suffixed with 'A'.
 * `findUsingPattern("A*")` will retrieve all of the font identifiers prefixed with 'A'.
 * `findUsingPattern("*A*", {limit: 10})` will retrieve at most 10 of the font identifiers containing 'A',
 * 
 * `limit` parameter describes if `findUsingPattern` should finish the search if it finds specified number of results (default is no limit). Non-positive values for limit are treated as unlimited.
 * 
 * **See Also**: `FontsModule.getAll`, `FontsModule.findFirst`.
 */function findUsingPattern(namePattern: string): Promise<Array<FontId>>
        ;

    function findUsingPattern(namePattern: string, config: { limit: number }): Promise<Array<FontId>>
        ;

/** 
* 
 *  
 * getAll(): Promise<Array<FontId>>
 *  
 * 
 * Returns a promise that is resolved with all of the font identifiers.
 * **See Also**: `FontsModule.findUsingPattern`, `FontsModule.findFirst`.
 *         
 */function getAll(): Promise<Array<FontId>>
        ;

/** 
* 
 *  
 * findFirst(name: string): Promise<FontId>
 *  
 * 
 * Returns a promise that is resolved with the font identifier of a requested name or null if none was found.
 * **See Also**: `FontsModule.findUsingPattern`, `FontsModule.getAll`.
 *         
 */function findFirst(name: string): Promise<FontId>
        ;

}
export = FontsModule;