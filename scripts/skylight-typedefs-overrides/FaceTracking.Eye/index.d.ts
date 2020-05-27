/// <reference path="../Reactive.PointSignal/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare interface Eye {
/** 
* ```
(get) center: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the center of the eye in the face local coordinate system.
*/ 
center: PointSignal;
/** 
* ```
(get) insideCorner: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the inside corner of the eye in the face local coordinate system.
*/ 
insideCorner: PointSignal;
/** 
* ```
(get) lowerEyelidCenter: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the center of the lower eyelid in the face local coordinate system.
*/ 
lowerEyelidCenter: PointSignal;
/** 
* ```
(get) openness: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` representing the openness of the eye.
The openness of the eye is a non-negative value where 0.0 is eye closed and 1.0 eye wide open (it can also take values greater than 1.0).
*/ 
openness: ScalarSignal;
/** 
* ```
(get) outsideCorner: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the outside corner of the eye in the face local coordinate system.
*/ 
outsideCorner: PointSignal;
/** 
* ```
(get) upperEyelidCenter: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the center of the upper eyelid in the face local coordinate system.
*/ 
upperEyelidCenter: PointSignal;
} 
