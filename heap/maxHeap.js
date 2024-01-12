// class Heap {
//     constructor() {
//         this.arr = [];
//     }

//     left(i) {
//         return 2 * i + 1;
//     }

//     right(i) {
//         return 2 * i + 2;
//     }

//     parent(i) {
//         return Math.floor((i - 1) / 2);
//     }

//     getMax() {
//         return this.arr[0];
//     }

//     insert(val) {
//         this.arr.push(val);
//         this.shiftUp(this.arr.length - 1);
//     }

//     shiftUp(i) {
//         let arr = this.arr;
//         while (i > 0) {
//             const p = this.parent(i);
//             if (arr[p] < arr[i]) {
//                 [arr[p], arr[i]] = [arr[i], arr[p]];
//                 i = p;
//             } else {
//                 break;
//             }
//         }
//     }

//     delete() {
//         const removed = this.arr[0];
//         const lastVal = this.arr.pop();

//         if (this.arr.length) {
//             this.arr[0] = lastVal;
//             this.shiftDown(0);
//         }
//         return removed;
//     }

//     shiftDown(i) {
//         const l = this.left(i);
//         const r = this.right(i);
//         let largest = i;

//         if (l < this.arr.length && this.arr[l] > this.arr[largest]) {
//             largest = l;
//         }
//         if (r < this.arr.length && this.arr[r] > this.arr[largest]) {
//             largest = r;
//         }

//         if (largest !== i) {
//             [this.arr[largest], this.arr[i]] = [this.arr[i], this.arr[largest]];
//             this.shiftDown(largest);
//         }
//     }

//     display() {
//         console.log(this.arr);
//     }

//     buildHeap(arr) {
//         this.arr = arr;
//         for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
//             this.shiftDown(i);
//         }
//     }
// }

// const maxHeap = new Heap();
// maxHeap.insert(10);
// maxHeap.insert(20);
// maxHeap.insert(1);
// maxHeap.insert(15);
// maxHeap.display();


// maxHeap.delete();
// maxHeap.delete();
// maxHeap.buildHeap([2, 23, -23, 1, 45, 65, -4, 87, 555, -8]);
// maxHeap.display();

class heap{
    constructor(){
        this.arr=[]
    }
    left(i){
        return 2 * i+1
    }
    right(i){
        return 2 * i+2
    }
    parent(i){
        return (i-1)/2
    }
    insert(val){
        this.arr.push(val)
        this.shiftUp(this.arr.length-1)
    }
    shiftUp(i){
        let arr=this.arr
        while(i>0){
            let p=this.parent(i)
            if(arr[i]>arr[p]){
                [arr[i],arr[p]]=[arr[p],arr[i]]
                i=p
            }else{
                break
            }
        }
    }
    display(){
        console.log(this.arr)
    }
    delete(){
        let last=this.arr.pop()
        if(this.arr.length){
            this.arr[0]=last
            this.shiftDown(0)
        }
    }
    shiftDown(i){
        let l=this.left(i)
        let r=this.right(i)
        let lar=i
        let arr=this.arr
        if(l<arr.length && arr[l]>arr[lar]){
            lar=l
        }
        if(r<arr.length && arr[r]>arr[lar]){
            lar=r
        }
        if( lar !== i){
            [arr[lar],arr[i]]=[arr[i],arr[lar]]
            this.shiftDown(lar)
        }

    }
    build(arr){
        this.arr=arr
        let n=Math.floor(arr.length/2)-1
        for(let i=n;i>=0;i--){
            this.shiftDown(i)
        }
    }
    
}
const h=new heap()
// h.insert(2)
// h.insert(5)
// h.insert(1)
// h.insert(8)
// h.insert(5)
h.display()
// h.delete()
h.build([2, 23, -23, 1, 45, 65, -4, 87, 555, -8]);

h.display()
// console.log(h.parent(1))
// console.log(h.left(0))

