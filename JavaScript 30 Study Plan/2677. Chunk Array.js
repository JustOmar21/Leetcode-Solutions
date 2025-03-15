/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let finalArr = [];
    let tempArr = [];
    for(let i = 0;i<arr.length;i++)
    {
        tempArr.push(arr[i])
        if((i+1)%size == 0){
            
            finalArr.push(tempArr);
            tempArr = [];
        }
    }
    if(tempArr.length != 0) finalArr.push(tempArr);
    return finalArr;
};
