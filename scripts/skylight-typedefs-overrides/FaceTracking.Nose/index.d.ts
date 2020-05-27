/// <reference path="../Reactive.PointSignal/index.d.ts" />
declare interface Nose {
/** 
* ```
(get) bridge: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the bridge of the nose in the face local coordinate system.
*/ 
bridge: PointSignal;
/** 
* ```
(get) leftNostril: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the left nostril in the face local coordinate system.
*/ 
leftNostril: PointSignal;
/** 
* ```
(get) rightNostril: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the right nostril in the face local coordinate system.
*/ 
rightNostril: PointSignal;
/** 
* ```
(get) tip: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the location of the tip of the nose in the face local coordinate system.
*/ 
tip: PointSignal;
} 
