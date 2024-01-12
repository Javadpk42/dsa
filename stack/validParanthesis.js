// var isValid = function (s) {
//     const stack = [];
//     const symbols = { '{': '}', '(': ')', '[': ']' };

//     for (let i = 0; i < s.length; i++) {
//         const currentChar = s[i];

//         if (symbols[currentChar]) {
//             stack.push(currentChar);
//         } else {
//             const topOfStack = stack[stack.length - 1];

//             if (symbols[topOfStack] === currentChar) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// };

const symbols = { '{': '}', '(': ')', '[': ']' };
console.log(symbols["{"])