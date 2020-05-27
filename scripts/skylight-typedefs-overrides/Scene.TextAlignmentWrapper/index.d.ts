/// <reference path="../Signal<VerticalTextAlignment>/index.d.ts" />
/// <reference path="../Signal<TextAlignment>/index.d.ts" />
declare interface TextAlignmentWrapper {
/** 
* ```
(get) vertical: Signal<VerticalTextAlignment>
(set) vertical: Signal<VerticalTextAlignment>
```

Specifies the vertical text alignment.
*/ 
vertical: Signal<VerticalTextAlignment>;
/** 
* ```
(get) horizontal: Signal<TextAlignment>
(set) horizontal: Signal<TextAlignment>
```

Specifies the horizontal text alignment.
*/ 
horizontal: Signal<TextAlignment>;
} 
