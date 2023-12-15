

// takes an array and a target sum as parameters and attempts to find a pair of numbers in the array whose sum equals the target.


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


//using set


const twoNumberSum = (array, target) => {
    let set = new Set();

    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        let match = target - number;

        if (set.has(match)) {
            return [number, match];
        } else {
            set.add(number);
        }
    }
    return null;
}



const res = twoNumberSum(numbers,targetSum)
console.log(res);