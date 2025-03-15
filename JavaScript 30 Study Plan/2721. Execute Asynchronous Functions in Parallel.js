/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
   for(let i = 0; i < functions.length; i++)
   {
       functions[i] = functions[i]();
   }
   let count = 0;
   return new Promise((resolve,reject) => {
       for(let i = 0; i < functions.length; i++)
       {
           functions[i]
               .then((resolved) => {
                   functions[i] = resolved
                   count++;
                   if(count == functions.length) resolve(functions)
               })
               .catch(reject)
       }
       
   })
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/