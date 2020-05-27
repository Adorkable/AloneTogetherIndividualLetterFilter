/// <reference path="../Reactive.ScalarSignal/index.d.ts" />

/// <reference path="../Point4DSignalHistory/index.d.ts" />
/// <reference path="../Reactive.VectorSignal/index.d.ts" />
/// <reference path="../Reactive.PointSignal/index.d.ts" />
declare interface Point4DSignal {
/** 
* ```
  (get) x: ScalarSignal
  (set) (Not Available)
  ```

  Represents the X coordinate.
*/ 
x: ScalarSignal;
/** 
* ```
  (get) y: ScalarSignal
  (set) (Not Available)
  ```

  Represents the Y coordinate.
*/ 
y: ScalarSignal;
/** 
* ```
  (get) z: ScalarSignal
  (set) (Not Available)
  ```

  Represents the Z component.
*/ 
z: ScalarSignal;
/** 
* ```
  (get) w: ScalarSignal
  (set) (Not Available)
  ```

  Represents the W component.
*/ 
w: ScalarSignal;
/** 
*  
 * history(framesCount: number): Point4DSignalHistory
 *  
 * 
 * Returns an object used to access signal values from past frames. The amount of frames tracked is customizable via `framesCount` parameter.
 * Historical signal values are going to be initialized with signal value at call time or using `initialValues` if provided.
 * 
 */history(framesCount: number): Point4DSignalHistory
 ;

/** 
*  
 * ceil(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the smallest integer that is greater than or equal to the value of the given signal.
 * 
 * **See Also**: `ScalarSignal.ceil`
 */ceil(x: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * neg(x: ScalarSignal): ScalarSignal
 * neg(x: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the negated value of the given signal.
 * 
 * **See Also**: `ScalarSignal.neg`, `VectorSignal.neg`
 */neg(x: ScalarSignal | number): ScalarSignal
 ;

neg(x: VectorSignal): VectorSignal
 ;

/** 
*  
 * abs(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the absolute value of the given signal.
 * 
 * **See Also**: `ScalarSignal.abs`
 */abs(x: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [min, max] range to [0.0, 1.0] range.
 */fromRange(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * sqrt(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the square root of the value of the given signal.
 * 
 * **See Also**: `ScalarSignal.sqrt`
 */sqrt(x: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * div(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the value of the first signal divided by the value of the second signal.
 * 
 * **See Also**: `ScalarSignal.div`
 */div(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * sign(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the sign of the given signal. Possible sign values: NaN, -0.0, 0.0, -1.0, 1.0.
 * 
 * **Note**: this function is the reactive counterpart of the standard JavaScript `Math.sign` utility.
 * 
 * **See Also**: `ScalarSignal.sign`
 */sign(x: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * sum(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * sum(x: PointSignal, y: VectorSignal): PointSignal
 * sum(x: VectorSignal, y: PointSignal): PointSignal
 * sum(x: VectorSignal, y: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * 
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
 */sum(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal
 ;

sum(x: PointSignal, y: VectorSignal): PointSignal
 ;

sum(x: VectorSignal, y: PointSignal): PointSignal
 ;

sum(x: VectorSignal, y: VectorSignal): VectorSignal
 ;

/** 
*  
 * pow(base: ScalarSignal, exponent: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the base signal raised to the power of the exponent signal.
 * 
 * The result is undefined if the base is negative, or if the base is zero and the exponent is not positive.
 * 
 * **See Also**: `ScalarSignal.pow`
 */pow(base: ScalarSignal | number, exponent: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal
 * reflect(normal: VectorSignal): VectorSignal
 *  
 * 
 * Calculates the reflection direction for an incident vector and a normal as a `VectorSignal`.
 */reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal
 ;

reflect(normal: VectorSignal): VectorSignal
 ;

/** 
*  
 * add(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * add(x: PointSignal, y: VectorSignal): PointSignal
 * add(x: VectorSignal, y: PointSignal): PointSignal
 * add(x: VectorSignal, y: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the sum of the values of the given signals.
 * 
 * **Note**: `add` and `sum` functions are synonyms, the behavior they provide is equivalent.
 * 
 * **See Also**: `ReactiveModule.sum`, `ScalarSignal.add`, `PointSignal.add`, `VectorSignal.add`
 */add(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal
 ;

add(x: PointSignal, y: VectorSignal): PointSignal
 ;

add(x: VectorSignal, y: PointSignal): PointSignal
 ;

add(x: VectorSignal, y: VectorSignal): VectorSignal
 ;

/** 
*  
 * sub(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * sub(x: PointSignal, y: VectorSignal): PointSignal
 * sub(x: VectorSignal, y: VectorSignal): VectorSignal
 * sub(x: PointSignal, y: PointSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the difference of the values of the given signals.
 * 
 * **See Also**: `ScalarSignal.sub`, `VectorSignal.sub`, `PointSignal.sub`
 */sub(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal
 ;

sub(x: PointSignal, y: VectorSignal): PointSignal
 ;

sub(x: VectorSignal, y: VectorSignal): VectorSignal
 ;

sub(x: PointSignal, y: PointSignal): VectorSignal
 ;

/** 
*  
 * mod(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the floating-point remainder of the division of the value of the first signal by the value of the second signal.
 * 
 * **See Also**: `ScalarSignal.mod`
 */mod(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * mul(x: ScalarSignal, y: ScalarSignal): ScalarSignal
 * mul(x: VectorSignal, y: ScalarSignal): VectorSignal
 * mul(x: ScalarSignal, y: VectorSignal): VectorSignal
 * mul(x: VectorSignal, y: VectorSignal): VectorSignal
 *  
 * 
 * Returns a signal with the value that is the product of the values of the given signals.
 * 
 * **See Also**: `ScalarSignal.mul`, `VectorSignal.mul`
 */mul(x: ScalarSignal | number, y: ScalarSignal | number): ScalarSignal
 ;

mul(x: VectorSignal, y: ScalarSignal | number): VectorSignal
 ;

mul(x: ScalarSignal | number, y: VectorSignal): VectorSignal
 ;

mul(x: VectorSignal, y: VectorSignal): VectorSignal
 ;

/** 
*  
 * atan2(y: ScalarSignal, x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the angle in radians between the x-axis and the ray from (0, 0) to (x, y) where x and y are the values of the specified signals. The range is -PI to +PI.
 * 
 * **See Also**: `ScalarSignal.atan2`
 */atan2(y: ScalarSignal | number, x: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * magnitude(v: VectorSignal): ScalarSignal
 *  
 * 
 * Returns the magnitude of the vector as a `ScalarSignal`.
 */magnitude(v: VectorSignal): ScalarSignal
 ;

/** 
*  
 * toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
 *  
 * 
 * Maps x from [0.0, 1.0] range to [min, max] range.
 */toRange(x: ScalarSignal | number, min: ScalarSignal | number, max: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * normalize(v: VectorSignal): VectorSignal
 * normalize(): VectorSignal
 *  
 * 
 * Returns the normalized (unit) vector in the direction of the original vector as a `VectorSignal`.
 */normalize(v: VectorSignal): VectorSignal
 ;

normalize(): VectorSignal
 ;

/** 
*  
 * dot(v1: VectorSignal, v2: VectorSignal): ScalarSignal
 *  
 * 
 * Returns a scalar signal with the value that is the dot product of the given signals.
 * 
 * **See Also**: `VectorSignal.cross`, `ScalarSignal.mul`, `VectorSignal.mul`
 */dot(v1: VectorSignal, v2: VectorSignal): ScalarSignal
 ;

/** 
*  
 * smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns 0.0 if x is less than edge0, and 1.0 if x is greater than edge1.
 * If x is between edge0 and edge1, smooth Hermite interpolation is performed.
 */smoothStep(x: ScalarSignal | number, edge0: ScalarSignal | number, edge1: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * round(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the rounded value of the given signal.
 * 
 * **Note**: When the fractional part is 0.5, it rounds the number away from zero, which is at odds with JavaScript standard behavior of rounding it always up in such cases. Therefore, this function is NOT exactly the reactive counterpart of the standard JavaScript `Math.round` utility.
 * 
 * **See Also**: `ScalarSignal.round`
 */round(x: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * floor(x: ScalarSignal): ScalarSignal
 *  
 * 
 * Returns a signal with the value that is the largest integer that is less than or equal to the value of the given signal.
 * 
 * **See Also**: `ScalarSignal.floor`
 */floor(x: ScalarSignal | number): ScalarSignal
 ;

/** 
*  
 * cross(v1: VectorSignal, v2: VectorSignal): VectorSignal
 *  
 * 
 * Returns a vector signal with the value that is the cross product of the given signals.
 * 
 * **See Also**: `VectorSignal.dot`, `ScalarSignal.mul`, `VectorSignal.mul`
 */cross(v1: VectorSignal, v2: VectorSignal): VectorSignal
 ;

/** 
*  
 * distance(v1: PointSignal, v2: PointSignal): ScalarSignal
 *  
 * 
 * Returns the distance from the point to another point as a `ScalarSignal`.
 */distance(v1: PointSignal, v2: PointSignal): ScalarSignal
 ;

} 
