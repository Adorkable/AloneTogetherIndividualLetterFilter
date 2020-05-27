/// <reference path="../Reactive.BoolSignal/index.d.ts" />
/// <reference path="../Reactive.InsetsSignal/index.d.ts" />
/// <reference path="../Reactive.PixelSizeSignal/index.d.ts" />
/// <reference path="../Signal<CameraPosition>/index.d.ts" />
/// <reference path="../Reactive.ScalarSignal/index.d.ts" />
declare namespace CameraInfoModule {
/** 
* ```
(get) isRecordingVideo: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is recording video.
*/ 
const isRecordingVideo: BoolSignal;
/** 
* ```
(get) isCapturingPhoto: BoolSignal
(set) (Not Available)
```

Specifies a `BoolSignal` that indicates whether the camera is capturing a photo.
*/ 
const isCapturingPhoto: BoolSignal;
/** 
* ```
(get) effectSafeAreaInsets: InsetsSignal
(set) (Not Available)
```

Specifies an `InsetsSignal` indicating the insets of the effect safe area.
*/ 
const effectSafeAreaInsets: InsetsSignal;
/** 
* ```
(get) previewSize: PixelSizeSignal
(set) (Not Available)
```

Specifies a `PixelSizeSignal` describing the size of the preview, in pixels.
*/ 
const previewSize: PixelSizeSignal;
/** 
* ```
(get) captureDevicePosition: Signal<CameraPosition>
(set) (Not Available)
```

Specifies a `CameraPosition` enum signal identifying the current camera in use on the device.
*/ 
const captureDevicePosition: Signal<CameraPosition>;
/** 
* ```
(get) previewScreenScale: ScalarSignal
(set) (Not Available)
```

Specifies a `ScalarSignal` describing the scale of the preview's screen, i.e. the number of pixels per point.
*/ 
const previewScreenScale: ScalarSignal;
} 
export = CameraInfoModule;