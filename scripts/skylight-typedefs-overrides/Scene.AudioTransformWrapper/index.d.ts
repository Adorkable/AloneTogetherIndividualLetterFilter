

/// <reference path="../Scene.AudioTransformParameterWrapper/index.d.ts" />
declare interface AudioTransformWrapper {
    /** 
    * ```
    (get) effectName: string
    (set) (Not Available)
    ```
    */
    effectName: string;
/** 
*  
 * transformParametersCount(): number
 *  
 */transformParametersCount(): number
        ;

/** 
*  
 * transformParameterAtIndex(index: number): AudioTransformParameterWrapper
 *  
 */transformParameterAtIndex(index: number): AudioTransformParameterWrapper
        ;

/** 
*  
 * transformParameterByName(parameterName: string): AudioTransformParameterWrapper
 *  
 */transformParameterByName(parameterName: string): AudioTransformParameterWrapper
        ;

} 
