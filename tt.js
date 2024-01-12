// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size==0
//     }
//     enqueue(val){
//         const node=new Node(val)
//         if(this.isEmpty()){
//             this.front=node
//             this.rear=node
//         }else{
//             this.front.next=node
//             this.front=node
//         }
//         this.size++
//     }
//     dequeue(){
//         let rem=this.rear.value
//         this.rear=this.rear.next
//         this.size--
//         return rem
//     }
//     print(){
//         let curr=this.rear
//         let qvalues=''
//         while(curr){
//             qvalues+=`${curr.value} `
//             curr = curr.next
//         }
//         console.log(qvalues)
//     }
//     reverse(){
//         let stack=[]
//         while(!this.isEmpty()){
//             stack.push(this.dequeue())
//         }
//         while(stack.length>0){
//             this.enqueue(stack.pop())
//         }
//     }
// }
// const q=new queue()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.print()
// q.reverse()
// q.print()

// function mergesort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right= arr.slice(mid)
//     return merge(mergesort(left),mergesort(right))
// }
// function merge(left,right){
//     let sorted=[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }
// const arr = [8, 20, -2, 4, -6]
// console.log(mergesort(arr))

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// const arr = [8, 20, -2, 4, -6]

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
// }

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=temp
//     }
// }


// function selectionSort(arr){
//     for(let i=0; i<arr.length-1;i++){
//         let m=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[m]){
//                 m=j
//             }
//         }
//         if(m!==i){
//             [arr[i],arr[m]] = [arr[m],arr[i]]
//         }
//     }
// }
// selectionSort(arr)
// console.log(arr)

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class stack{
//     constructor(){
//         this.top=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     push(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.top=node
//         }else{
//             node.next =this.top
//             this.top=node
//         }
//         this.size++
//     }
//     pop(){
//         let rem=this.top
//         this.top=this.top.next
//         this.size--
//         return rem
//     }
//     print(){
//         let curr=this.top
//         let stackValues=''
//         while(curr){
//             stackValues+=`${curr.value} `
//             curr = curr.next
//         }
//         console.log(stackValues)
//     }
//     reverse(){
//         let stack=[]
//         while(!this.isEmpty()){
//             stack.push(this.pop().value)
//         }
//         while(stack.length>0){
//             this.push(stack.shift())
//         }
//     }
// }
// let s=new stack()
// s.push(1)
// s.push(2)
// s.push(3)
// s.print()
// s.reverse()
// s.print()

// class Node{
//     constructor(key,val) {
//         this.key=key
//         this.val=val
//         this.next=null
//     }
// }
// class hashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key,val){
//         let index=this.hash(key)
//         if(this.table[index]===undefined){

//         }
//     }
// }

// str1 = "ABCABC", str2 = "ABCA"
// console.log(str1.includes(str2))
let set =new Set()
console.log(set)