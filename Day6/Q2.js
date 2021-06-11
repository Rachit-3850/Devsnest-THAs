function array_clone(array)
{
    let arr1=[]
    for(const iterator of array)
    {
        arr1[iterator]=array[iterator];
        arr1.push(iterator)
    }
    return arr1
}
[1, 2, 4, 0]
[1, 2, [4, 0]]
