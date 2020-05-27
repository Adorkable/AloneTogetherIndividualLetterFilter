/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.TransformSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface Tracking {
/** 
* ```
(get) isTracking: BoolSignal
(set) (Not Available)
```
*/ 
isTracking: BoolSignal;
/** 
* ```
(get) globalTransform: TransformSignal
(set) (Not Available)
```
*/ 
globalTransform: TransformSignal;
/** 
* ```
(get) targetAspectRatio: ScalarSignal
(set) (Not Available)
```
*/ 
targetAspectRatio: ScalarSignal;
} 
