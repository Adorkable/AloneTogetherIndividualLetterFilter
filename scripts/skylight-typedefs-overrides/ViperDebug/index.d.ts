/// <reference path="../Reactive.StringSignal/index.d.ts" />
declare namespace ViperDebugModule {
/** 
* ```
(get) debugString: StringSignal
(set) (Not Available)
```

Gets a debug string piped through from Viper.
*/ 
const debugString: StringSignal;
/** 
*  
 * setViperOnlyMode() : void
 *  
 * 
 * Makes underlying camera + anchor tracking algorithms run in viper only mode.
 */function setViperOnlyMode() : void
 ;

/** 
*  
 * clearViperOnlyMode() : void
 *  
 * 
 * Removes running in viper only mode. (Aka, runs the normal gyro+regiontracking+SLAM)
 */function clearViperOnlyMode() : void
 ;

} 
export = ViperDebugModule;