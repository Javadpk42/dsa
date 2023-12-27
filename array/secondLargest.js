var arr = [1, 2, 3, 4, 2, 3, 1, 3, 4, 5];
let l = -Infinity
let sl = -Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>l){
        sl = l
        l = arr[i]
    }else if(arr[i]<l && arr[i]>sl){
        sl = arr[i]
    }
}
console.log(sl,l)

var ar = [1, 2, 3, 4, 2, 3, 1, 3, 4, 5];
let s= new Set (ar)
console.log(s)