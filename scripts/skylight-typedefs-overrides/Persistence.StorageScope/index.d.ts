


declare interface StorageScope {
/** 
*  
 * get(key: String): Promise<Object>
 *  
 * 
 * Gets the value with the specified key.
 * Returns a `Promise` which will be fulfilled with a JavaScript object or an error.
 */get(key: String): Promise<Object>
        ;

/** 
*  
 * set(key: String, value: Object): Promise<>
 *  
 * Sets the value for the key.
 * Returns a `JS Promise` or an error.
 */set(key: String, value: Object): Promise<any>
        ;

/** 
*  
 * remove(key: String): Promise<>
 *  
 * 
 * Removes the key.
 * Returns a `Promise` that resolves to nothing or an error.
 */remove(key: String): Promise<any>
        ;

} 
