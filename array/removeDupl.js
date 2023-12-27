var arr = [1, 2, 3, 4, 2, 3, 1, 3, 4, 5];

var uniqueArr = [];
let dup =[]
for (var i = 0; i < arr.length; i++) {
  // if (uniqueArr.indexOf(arr[i]) === -1) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }else{
    dup.push(arr[i])
  }
}

console.log(uniqueArr);
console.log(dup);


