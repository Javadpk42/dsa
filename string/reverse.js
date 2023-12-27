function reverseString(str){
    return str.split('').reverse().join('')
}

const res =reverseString("javad")
console.log(res);

// function isPalindrome(str) {
//     const reversedStr = str.split('').reverse().join('');
    
//     return str === reversedStr;
//   }
  
//   const exampleString = "A man, a plan, a canal, Panama!";
//   console.log(isPalindrome(exampleString));

// let str = "Hello, World!";
// let reversedStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i];
// }

// console.log(reversedStr);
