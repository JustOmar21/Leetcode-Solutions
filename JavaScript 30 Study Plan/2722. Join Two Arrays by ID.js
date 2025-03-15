/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let i = 0;
    let j = 0;
    let finalArr = [];
    arr1.sort((a,b) => a.id - b.id)
    arr2.sort((a,b) => a.id - b.id)
    while(i < arr1.length && j < arr2.length)
    {
        if(arr1[i].id == arr2[j].id)
        {
            let temp = JSON.parse(JSON.stringify(arr2[j]));
            Object.assign(arr2[j],arr1[i],temp)
            finalArr.push(arr2[j++]);
            i++;
        }
        else if(arr1[i].id < arr2[j].id)
        {
            finalArr.push(arr1[i++]);
        }
        else
        {
            finalArr.push(arr2[j++]);            
        }
    }
    while(i < arr1.length) finalArr.push(arr1[i++]);
    while(j < arr2.length) finalArr.push(arr2[j++]);

    return finalArr;
};