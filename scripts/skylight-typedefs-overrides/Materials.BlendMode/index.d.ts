/** 
 * The `BlendMode` enum describes how material is blended.
 * @property ASSOCIATIVE_ALPHA Same as alpha blend mode, but for source with RGB channels of each pixel premultiplied by its alpha.
 * @property ALPHA Linear interpolation between the pixels of the source and destination as specified by the alpha values of the source.
 * @property SCREEN Values of each pixels in the source and destination are inverted, multiplied, and then inverted again.
 * @property MULTIPLY Multiplies the RGB channels of each pixel from the source with the values of the corresponding pixel from the destination.
 * @property REPLACE The non-transparent pixels of the source replace corresponding pixels of the destination.
 * @property SUBTRACT Subtracts pixel values of the source from the destination. In case of negative values, black is displayed.
 * @property ADD Adds pixel values of the source to the destination.
 */ 
declare interface BlendMode{ 
ASSOCIATIVE_ALPHA, 
ALPHA, 
SCREEN, 
MULTIPLY, 
REPLACE, 
SUBTRACT, 
ADD, 
} 
