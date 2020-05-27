/// <reference path="../Reactive.PointSignal/index.d.ts" />
declare interface Eyebrow {
/** 
* ```
(get) insideEnd: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the inside end of the eyebrow in the face local coordinate system.
*/ 
insideEnd: PointSignal;
/** 
* ```
(get) outsideEnd: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the outside end of the eyebrow in the face local coordinate system.
*/ 
outsideEnd: PointSignal;
/** 
* ```
(get) top: PointSignal
(set) (Not Available)
```

Specifies a `PointSignal` representing the top of the eyebrow in the face local coordinate system.
*/ 
top: PointSignal;
} 
