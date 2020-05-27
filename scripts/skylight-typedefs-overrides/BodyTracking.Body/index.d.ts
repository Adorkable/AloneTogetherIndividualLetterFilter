/// <reference path="../Reactive.BoundingBoxSignal/index.d.ts" />
/// <reference path="../Reactive.StringSignal/index.d.ts" />
/// <reference path="../Reactive.BoolSignal/index.d.ts" />
declare interface Body {
/** 
* ```
(get) boundingBox: BoundingBoxSignal
(set) (Not Available)
```

Returns a `BoundingBoxSignal` object.
*/ 
boundingBox: BoundingBoxSignal;
/** 
* ```
(get) id: StringSignal
(set) (Not Available)
```

Returns a `StringSignal` object.
*/ 
id: StringSignal;
/** 
* ```
(get) isTracking: BoolSignal
(set) (Not Available)
```

Returns a `BoolSignal` object.
*/ 
isTracking: BoolSignal;
} 
