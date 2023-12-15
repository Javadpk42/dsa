function findPairs(arr, target){
    arr.sort((a,b)=>a-b)
    let left = 0
    let right =arr.length - 1
    while(left < right ){
        if( arr[left] + arr[right] == target){
            return [  arr[left] , arr[right] ]
        } else if ( arr[left] + arr[right] > target ){
            right--;
        } else {
            left++;
        }
       
    }
    return null
}

const numbers = [6, 5, 4, 3, 9, 8, 0];
const targetSum = 10;

const result = findPairs(numbers,targetSum)
console.log(result);