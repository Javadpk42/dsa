

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let numberToInsert = arr[i]
//       let j = i - 1
//       while (j >= 0 && arr[j] > numberToInsert) {
//         arr[j + 1] = arr[j]
//         j = j - 1
//       }
//       arr[j + 1] = numberToInsert
//     }
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   insertionSort(arr)
//   console.log(arr)


// function insertionSort(arr){
//   for(let i=1;i<arr.length;i++){
//     let temp=arr[i]
//     let j=i-1
//     while(j>=0 && arr[j]>temp){
//       arr[j+1]=arr[j]
//       j--
//     }
//     arr[j+1]=temp
//   }
// }

// let array = [1,9,2,8]
// insertionSort(array)
// console.log(array)

// best o(n)  (already sorted )
// worst o(n2) (reverse sorted )

function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    // let temp=arr[i-1]
    let temp=arr[i]
    j=i-1
    while(j>=0&&arr[j]>temp){
      arr[j+1]=arr[j]
      j--
    }
    arr[j+1]=temp
  }
}
array=[4,1,9,3]
insertionSort(array)
console.log(array)