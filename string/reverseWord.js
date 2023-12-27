let str = 'hi javad'
let arr = str.split(' ')
arr = arr.map(x => x.split('').reverse().join(''))
arr = arr.join(' ')
console.log(arr)