const removeDuplicates = (nums) => {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

const nums = [1, 1, 2];
const length = removeDuplicates(nums);
console.log(length);