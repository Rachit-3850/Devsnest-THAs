function freq(params)
{
    const newmap=new Map()
    for (let i = 0; i < params.length; i++) {
        if(newmap.has(params[i]))
        {
        newmap.set(params[i],newmap.get(params[i])+1)
        }
        else
        {
        newmap.set(params[i],1)
        }
    }
    let maxv=0;
    let maxk=0;
    for(let [key,value] of newmap)
    {
        if(value>maxv)
        {
            maxv=value;
            maxk=key;
        }
    }
    return {maxk,maxv}
}
const x= freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])
console.log()