


// function bubbleSort(arr) {
//     let swapped
//     do {
//       swapped = false
//       for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//           let temp = arr[i]
//           arr[i] = arr[i + 1]
//           arr[i + 1] = temp
//           swapped = true
//         }
//       }
//     } while (swapped)
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   bubbleSort(arr)
//   console.log(arr) 


// function bubbleSort(arr){
//   let swapped
//   do{
//     swapped = false
//     for(let i=0;i<arr.length-1;i++){
//       if(arr[i]>arr[i+1]){
//         let temp = arr[i+1]
//         arr[i+1]=arr[i]
//         arr[i]=temp
//         swapped = true
//       }
//     }
//   }while(swapped)
// }
// let array = [1,9,2,8]
// bubbleSort(array)
// console.log(array)

// best o(n)  (already sorted )
// worst o(n2) (reverse sorted )

function bubbleSort(arr){
  let swapped
  do{
    swapped=false
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]>arr[i+1]){
        let temp=arr[i+1]
        arr[i+1]=arr[i]
        arr[i]=temp
        swapped=true
      }
    }
  }while(swapped)
}
let array =[1,5,2,0]
bubbleSort(array)
console.log(array)