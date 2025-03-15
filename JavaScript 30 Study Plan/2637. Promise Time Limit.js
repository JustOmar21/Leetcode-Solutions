/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
   return async function(...args) {
       return new Promise((resolve,reject) => {
           var time = setTimeout(()=>reject("Time Limit Exceeded"),t)
           fn(...args).then(resolve).catch(reject).finally(() => clearTimeout(time))

       })
   }
};

/**
* const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
* limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
*/