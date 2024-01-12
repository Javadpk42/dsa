// function mergesort(arr) {
//     if (arr.length < 2) {
//       return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid)
//     return merge(mergesort(leftArr), mergesort(rightArr))
//   }
  
//   function merge(leftArr, rightArr) {
//     const sortedArr = []
//     while (leftArr.length && rightArr.length) {
//       if (leftArr[0] <= rightArr[0]) {
//         sortedArr.push(leftArr.shift())
//       } else {
//         sortedArr.push(rightArr.shift())
//       }
//     }
//     const resultArr = [...sortedArr, ...leftArr, ...rightArr]
//     return resultArr
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]

// function mergesort(arr){
//   if(arr.length<2){
//     return arr
//   }
//   let mid = Math.floor((arr.length)/2)
//   let leftArr=arr.slice(0,mid)
//   let rightArr=arr.slice(mid)
//   return merge(mergesort(leftArr),mergesort(rightArr))
  
// }
// function merge(left,right){
//   let sortedArr =[]
//   while(left.length&&right.length){
//     if(left[0]<=right[0]){
//       sortedArr.push(left.shift())
//     }else{
//       sortedArr.push(right.shift())
//     }
//   }
//   return [...sortedArr,...left,...right]
// }

//   const arr = [8, 20, -2, 4, -6]
//   console.log(mergesort(arr))

function mergesort(arr){
  if(arr.length<2){
    return arr
  }
  let mid=Math.floor(arr.length/2)
  let left=arr.slice(0,mid)
  let right=arr.slice(mid)
  return merge(mergesort(left),mergesort(right))
}
function merge(left,right){
  let sortedArr=[]
  while(left.length&& right.length){
    if(left[0]<=right[0]){
      sortedArr.push(left.shift())
    }else{
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr,...left,...right]
}
  const arr = [8, 20, -2, 4, -6]
  console.log(mergesort(arr))