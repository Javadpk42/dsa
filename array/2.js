// sorting function that moves all occurrences of a specified target value to the end of the array

function sort(arr,target){
    for(let i=0;i<arr.length;i++){
        if (arr[i]===target) {
            arr.push(arr[i]);
            arr.splice(i,1);
        }
    }
    return arr
}

let arr = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
let target = 6;

console.log(sort(arr,target));