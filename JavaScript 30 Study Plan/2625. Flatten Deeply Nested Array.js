/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let finalArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(Array.isArray(arr[i]))
        {            
            finalArr.push(...recursiveFlat(0,arr[i]));
        }
        else
        {
            finalArr.push(arr[i])
        }
    }
    return finalArr

    function recursiveFlat(currentDepth,arr)
    {
        
        if(currentDepth >= n)
        {
            return [arr]
        }
        else
        {
            let result = []
            for(let i = 0;i < arr.length; i++)
            {
                if(Array.isArray(arr[i]))
                {            
                    result.push(...recursiveFlat(currentDepth + 1,arr[i]));
                }
                else
                {
                    result.push(arr[i])
                }
            }
            return result;
        }
    }
};