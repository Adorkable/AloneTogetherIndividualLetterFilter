/// <reference path="../FaceTracking.Face/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare namespace FacialActionsModule {
/** 
*  
 * browLowererLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `BrowLowererLeft`.
 */function browLowererLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * browLowererRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `BrowLowererRight`.
 */function browLowererRight(face: Face): ScalarSignal
 ;

/** 
*  
 * chinRaiser(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `ChinRaiser`.
 */function chinRaiser(face: Face): ScalarSignal
 ;

/** 
*  
 * eyeCloseLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `EyeCloseLeft`.
 */function eyeCloseLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * eyeCloseRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `EyeCloseRight`.
 */function eyeCloseRight(face: Face): ScalarSignal
 ;

/** 
*  
 * innerBrowRaiser(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `InnerBrowRaiser`.
 */function innerBrowRaiser(face: Face): ScalarSignal
 ;

/** 
*  
 * jawDrop(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `JawDrop`.
 */function jawDrop(face: Face): ScalarSignal
 ;

/** 
*  
 * lidTightenerLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LidTightenerLeft`.
 */function lidTightenerLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * lidTightenerRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LidTightenerRight`.
 */function lidTightenerRight(face: Face): ScalarSignal
 ;

/** 
*  
 * lipCornerDepressorLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LipCornerDepressorLeft`.
 */function lipCornerDepressorLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * lipCornerDepressorRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LipCornerDepressorRight`.
 */function lipCornerDepressorRight(face: Face): ScalarSignal
 ;

/** 
*  
 * lipCornerPullerLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LipCornerPullerLeft`.
 */function lipCornerPullerLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * lipCornerPullerRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LipCornerPullerRight`.
 */function lipCornerPullerRight(face: Face): ScalarSignal
 ;

/** 
*  
 * lipDepressorLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LipDepressorLeft`.
 */function lipDepressorLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * lipDepressorRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LipDepressorRight`.
 */function lipDepressorRight(face: Face): ScalarSignal
 ;

/** 
*  
 * lipStretchLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LipStretchLeft`.
 */function lipStretchLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * lipStretchRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LipStretchRight`.
 */function lipStretchRight(face: Face): ScalarSignal
 ;

/** 
*  
 * lipSuck(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `LipSuck`.
 */function lipSuck(face: Face): ScalarSignal
 ;

/** 
*  
 * mouthMoveLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `MouthMoveLeft`.
 */function mouthMoveLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * mouthMoveRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `MouthMoveRight`.
 */function mouthMoveRight(face: Face): ScalarSignal
 ;

/** 
*  
 * noseWrinklerLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `NoseWrinklerLeft`.
 */function noseWrinklerLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * noseWrinklerRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `NoseWrinklerRight`.
 */function noseWrinklerRight(face: Face): ScalarSignal
 ;

/** 
*  
 * outerBrowRaiserLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `OuterBrowRaiserLeft`.
 */function outerBrowRaiserLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * outerBrowRaiserRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `OuterBrowRaiserRight`.
 */function outerBrowRaiserRight(face: Face): ScalarSignal
 ;

/** 
*  
 * pucker(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `Pucker`.
 */function pucker(face: Face): ScalarSignal
 ;

/** 
*  
 * upperLidRaiserLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `UpperLidRaiserLeft`.
 */function upperLidRaiserLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * upperLidRaiserRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `UpperLidRaiserRight`.
 */function upperLidRaiserRight(face: Face): ScalarSignal
 ;

/** 
*  
 * upperLipRaiserLeft(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `UpperLipRaiserLeft`.
 */function upperLipRaiserLeft(face: Face): ScalarSignal
 ;

/** 
*  
 * upperLipRaiserRight(face: Face): ScalarSignal
 *  
 * 
 * Returns a `ScalarSignal` containing the weight associated with the facial action named `UpperLipRaiserRight`.
 */function upperLipRaiserRight(face: Face): ScalarSignal
 ;

} 
export = FacialActionsModule;