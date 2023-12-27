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

const numbers = [6, 5, 4, 3, 9, 8, 0];
const targetSum = 10;

const res = twoNumberSum(numbers,targetSum)
console.log(res);