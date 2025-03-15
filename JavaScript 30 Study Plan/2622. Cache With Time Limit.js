var TimeLimitedCache = function() {
   this.map = new Map()
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
   let bool = this.map.has(key);
   if(bool) clearTimeout(this.map.get(key).dur)
   this.map.set(key,{val:value , dur:setTimeout(()=>this.map.delete(key),duration)})
   return bool;
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
   return this.map.has(key) ? this.map.get(key).val : -1;
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
   return this.map.size
};

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
*/