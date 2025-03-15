/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let finalArr = {};
    for(let i = 0; i<this.length; i++)
    {
        let key = fn(this[i]);
        if(finalArr[key] == null)
            finalArr[key] = [];
        finalArr[key].push(this[i]);
    }
    return finalArr
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */