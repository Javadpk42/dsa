    //binary search algorithm that uses recursion to find a target value within an array.

// function recursiveBinarysearch(arr,target){
//     return binarySearch(arr, target, 0 , arr.length-1)
// }

// function binarySearch(arr,target,l,r){
    
//     let m = Math.floor((l+r)/2);
//     if (arr[m]==target){
//         return m
//     }
//     if(arr[m]>target){
//         return binarySearch(arr, target, l, m-1)
//     }
//     else{
//         return binarySearch(arr, target, m+1, r)
//     }
// }

// console.log(recursiveBinarysearch([1,2,3,8,10],8));


function recursiveBinarysearch(arr,target,start=0,end=arr.length-1){
    if(start>end){
        return null
    }
    let mid = Math.floor((start+end)/2 )
    if(arr[mid] === target){
        return mid
    }
    if(arr[mid]>target){
        return recursiveBinarysearch(arr,target,start,mid-1)
    }
    return recursiveBinarysearch(arr,target,mid+1,end)
}

const arr = [1,2,3,4,5]
const target = 3
const res = recursiveBinarysearch(arr,target)
console.log(res);