class EventEmitter {
    
   /**
    * @param {string} eventName
    * @param {Function} callback
    * @return {Object}
    */

   constructor() {
       this.EventMap = new Map();
   }
   subscribe(eventName, callback) {
       
       if(this.EventMap.has(eventName))
       {
           this.EventMap.get(eventName).push(callback);
       }
       else
       {
           this.EventMap.set(eventName,[]);            
           this.EventMap.get(eventName).push(callback);            
       }

       return {
           unsubscribe: () => {
               if(this.EventMap.has(eventName))
               {
                   let arr = this.EventMap.get(eventName)
                   let index = arr.indexOf(callback)
                   if(index != -1)
                   arr.splice(index,1)
               }
           }
       };
   }
   
   /**
    * @param {string} eventName
    * @param {Array} args
    * @return {Array}
    */
   emit(eventName, args = []) {
       let arr = []
       if(this.EventMap.has(eventName))
       {
           let elements = this.EventMap.get(eventName);
           for(let ele of elements)
           {
               arr.push(ele(...args))
           }
       }
       return arr;
   }
}

/**
* const emitter = new EventEmitter();
*
* // Subscribe to the onClick event with onClickCallback
* function onClickCallback() { return 99 }
* const sub = emitter.subscribe('onClick', onClickCallback);
*
* emitter.emit('onClick'); // [99]
* sub.unsubscribe(); // undefined
* emitter.emit('onClick'); // []
*/