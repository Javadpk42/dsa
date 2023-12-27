function recursion(arr,index=0){
    if(index == arr.length){
        return 0
    }
    return arr[index] + recursion(arr,index+1)
}
console.log(recursion([1,2,3]))