
  @param {ObjectArray} obj
  @return {ObjectArray}
 
var compactObject = function(obj) {
    if(Array.isArray(obj))
    {
        return obj
                .map(item = typeof item === 'object'  compactObject(item)  item)
                .filter(Boolean)
    }
    else if(typeof obj === 'object')
    {
        
        if(obj)
        Object.keys(obj)
                .forEach((key) = {
                    if(!obj[key])
                        delete obj[key]
                    else
                        obj[key] = compactObject(obj[key])

                })
    }
    return obj
};