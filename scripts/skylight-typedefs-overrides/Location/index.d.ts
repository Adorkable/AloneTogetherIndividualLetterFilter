/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Location.CoordinateSignal/index.d.ts" />
declare namespace LocationModule {
/** 
* ```
                                        (get) hasValidLocation: BoolSignal
                                        (set) (Not Available)
                                        ```
*/ 
const hasValidLocation: BoolSignal;
/** 
* ```
                                        (get) coordinate: CoordinateSignal
                                        (set) (Not Available)
                                        ```
*/ 
const coordinate: CoordinateSignal;
} 
export = LocationModule;