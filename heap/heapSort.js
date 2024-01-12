// function heapSort(arr){
//     const n=arr.length
//     for(let i=Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i=n-1;i>0;i--){
//         [arr[0], arr[i]]= [arr[i], arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }

// function heapify(arr, n,i){
//     let largest=i
//     const l=(i*2)+1
//     const r=(i*2)+2
//     if(l<n && arr[l]>arr[largest]){
//         largest=l
//     }
//     if(r<n && arr[r]>arr[largest]){
//         largest=r
//     }

//     if(largest!==i){
//         [arr[largest], arr[i]] = [arr[i], arr[ largest]]
//         heapify(arr,n,largest)
//     }
// }

// console.log(heapSort([2,23,-23,1,45,65,-4,87,555,-8]));

function heapSort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2-1);i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}
function heapify(arr,n,i){
    let l=(2*i)+1
    let r=(2*i)+2
    let lar=i
    if(l<n && arr[l]>arr[lar]){
        lar=l
    }
    if(r<n && arr[r]>arr[lar]){
        lar=r
    }
    if(lar !== i){
        [arr[lar],arr[i]]=[arr[i],arr[lar]]
        i=lar
        heapify(arr,n,i)
    }

}
console.log(heapSort([2,23,-23,1,45,65,-4,87,555,-8]));
