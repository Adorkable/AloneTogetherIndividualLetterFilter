/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare namespace FacialMovementsModule {
/** 
*  
 * innerBrowUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `InnerBrowUp`.
 */function innerBrowUp(face: Face): ScalarSignal
 ;

/** 
*  
 * jawDown(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `JawDown`.
 */function jawDown(face: Face): ScalarSignal
 ;

/** 
*  
 * leftBrowDown(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftBrowDown`.
 */function leftBrowDown(face: Face): ScalarSignal
 ;

/** 
*  
 * leftEyeClose(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftEyeClose`.
 */function leftEyeClose(face: Face): ScalarSignal
 ;

/** 
*  
 * leftEyeSquint(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftEyeSquint`.
 */function leftEyeSquint(face: Face): ScalarSignal
 ;

/** 
*  
 * leftLipsCornerUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftLipsCornerUp`.
 */function leftLipsCornerUp(face: Face): ScalarSignal
 ;

/** 
*  
 * leftLowerLipDown(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftLowerLipDown`.
 */function leftLowerLipDown(face: Face): ScalarSignal
 ;

/** 
*  
 * leftMouthDimple(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftMouthDimple`.
 */function leftMouthDimple(face: Face): ScalarSignal
 ;

/** 
*  
 * leftOuterBrowUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftOuterBrowUp`.
 */function leftOuterBrowUp(face: Face): ScalarSignal
 ;

/** 
*  
 * leftUpperEyeLidUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftUpperEyeLidUp`.
 */function leftUpperEyeLidUp(face: Face): ScalarSignal
 ;

/** 
*  
 * leftUpperLipUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LeftUpperLipUp`.
 */function leftUpperLipUp(face: Face): ScalarSignal
 ;

/** 
*  
 * lipFunnel(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipFunnel`.
 */function lipFunnel(face: Face): ScalarSignal
 ;

/** 
*  
 * lipsMoveLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipsMoveLeft`.
 */function lipsMoveLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * lipsMoveRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipsMoveRight`.
 */function lipsMoveRight(face: Face): ScalarSignal
 ;

/** 
*  
 * lipsPucker(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LipsPucker`.
 */function lipsPucker(face: Face): ScalarSignal
 ;

/** 
*  
 * lowerLipOut(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `LowerLipOut`.
 */function lowerLipOut(face: Face): ScalarSignal
 ;

/** 
*  
 * rightBrowDown(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightBrowDown`.
 */function rightBrowDown(face: Face): ScalarSignal
 ;

/** 
*  
 * rightEyeClose(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightEyeClose`.
 */function rightEyeClose(face: Face): ScalarSignal
 ;

/** 
*  
 * rightEyeSquint(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightEyeSquint`.
 */function rightEyeSquint(face: Face): ScalarSignal
 ;

/** 
*  
 * rightLipsCornerUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightLipsCornerUp`.
 */function rightLipsCornerUp(face: Face): ScalarSignal
 ;

/** 
*  
 * rightLowerLipDown(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightLowerLipDown`.
 */function rightLowerLipDown(face: Face): ScalarSignal
 ;

/** 
*  
 * rightMouthDimple(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightMouthDimple`.
 */function rightMouthDimple(face: Face): ScalarSignal
 ;

/** 
*  
 * rightOuterBrowUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightOuterBrowUp`.
 */function rightOuterBrowUp(face: Face): ScalarSignal
 ;

/** 
*  
 * rightUpperEyeLidUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightUpperEyeLidUp`.
 */function rightUpperEyeLidUp(face: Face): ScalarSignal
 ;

/** 
*  
 * rightUpperLipUp(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `RightUpperLipUp`.
 */function rightUpperLipUp(face: Face): ScalarSignal
 ;

/** 
*  
 * upperLipOut(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial movement named `UpperLipOut`.
 */function upperLipOut(face: Face): ScalarSignal
 ;

} 
export = FacialMovementsModule;