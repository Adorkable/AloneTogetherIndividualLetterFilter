/// <reference path="../Materials.MaterialBase/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />

/// <reference path="../Fonts.FontId/index.d.ts" />
/// <reference path="../number | void/index.d.ts" />

/// <reference path="../Scene.TextAlignmentWrapper/index.d.ts" />

declare interface PlanarText {
    /** 
    * ```
    (get) (Not Available)
    (set) material: MaterialBase
    ```
    
    Specifies the material of the scene object.
    */
    material: MaterialBase;
    /** 
    * ```
    (get) text: StringSignal
    (set) text: StringSignal
    ```
    
    Specifies the text displayed.
    */
    text: StringSignal;
    /** 
    * ```
    (get) (Not Available)
    (set) fontSize: number
    ```
    
    Specifies the font size of the text.
    */
    fontSize: number;
    /** 
    * ```
    (get) (Not Available)
    (set) font: FontId
    ```
    
    Sets the given font from the fonts registry.
    */
    font: FontId;
    /** 
    * ```
    (get) (Not Available)
    (set) leading: number | void
    ```
    
    Specifies the line spacing. This is the distance between the baselines in the text. If unspecified, spacing defaults to the font size.
    */
    leading?: number;
    /** 
    * ```
    (get) (Not Available)
    (set) scaleToFit: boolean
    ```
    
    Specifies if the text is scaled to fit the container.
    */
    scaleToFit: boolean;
    /** 
    * ```
    (get) (Not Available)
    (set) maxLines: number | void
    ```
    
    Specifies the maximum number of lines for the text. If unspecified, the number of lines is unrestricted.
    */
    maxLines?: number;
    /** 
    * ```
    (get) (Not Available)
    (set) tracking: number
    ```
    
    Specifies the text spacing. This is the additional distance between letters. Default is zero. Can be negative.
    */
    tracking: number;
    /** 
    * ```
    (get) alignment: TextAlignmentWrapper
    (set) (Not Available)
    ```
    
    Represents the `TextAlignmentWrapper` that contains parameters that specify the text alignment.
    */
    alignment: TextAlignmentWrapper;
/** 
*  
 * getMaterial(): Promise<MaterialBase>
 *  
 * 
 * Returns a promise that is resolved with the material associated with a given scene object or null if no material was assigned.
 */getMaterial(): Promise<MaterialBase>;

} 
