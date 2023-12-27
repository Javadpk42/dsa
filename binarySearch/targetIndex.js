    // Binary Search algorithm in JavaScript. It searches for a specific value "target" within the sorted array 'arr'.

function binarySearch(arr, target){

    let l = 0
    let r = arr.length - 1
    while(l<=r){
        let m = Math.floor((l+r)/2)
        if(arr[m] === target){
            return m
        }
        if(arr[m]<target){
            l = m + 1
        }
        if(arr[m]>target){
            r = m - 1
        }
    }
    
}

console.log(binarySearch([1,2,3,8,10],10));