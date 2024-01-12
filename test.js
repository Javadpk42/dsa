// class Node{
//     constructor(value){
//     this.value = value
//     this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     getSize(){
//         return this.size
//     }
//     isEmpty(){
//         return this.size===0
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty');
//         }else{
//             let curr = this.head
//             let listvalues = ''
//             while(curr){
//                 listvalues +=`${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listvalues)
//         }
//     }
// }

// const list = new LinkedList()
// list.prepend(2)
// list.prepend(3)

// list.print()

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//       let curr = this.head;
//       let listvalues = "";
//       while (curr) {
//         listvalues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listvalues);
//     }
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }
//   insert(index, value) {
//     if (index === 0) {
//       const node = new Node(value);
//       if (this.isEmpty()) {
//         this.head = node;
//       } else {
//         node.next = this.head;
//         this.head = node;
//       }
//       this.size++;
//     } else {
//       const node = new Node(value);
//       let prev = this.head;
//       for (let i = 1; i < index; i++) {
//         prev = prev.next;
//       }
//       node.next = prev.next;
//       prev.next = node;
//       this.size++;
//     }
//   }
//   remove(index) {
//     if (index < 0 || index > this.size) {
//       return null;
//     } else {
//       if (index === 0) {
//         this.head = this.head.next;
//       } else {
//         let prev = this.head;
//         for (let i = 1; i < index; i++) {
//           prev = prev.next;
//         }
//         prev.next = prev.next.next;
//       }
//       this.size--;
//     }
//   }
//   removevalue(value) {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       if (this.head.value === value) {
//         this.head = this.head.next;
//       } else {
//         let prev = this.head;
//         while (prev.next && prev.next.value != value) {
//           prev = prev.next;
//         }
//         if (prev.next) {
//           prev.next = prev.next.next;
//         }
//       }
//       this.size--;
//     }
//   }
//   search(value){
//     if(this.isEmpty()){
//         return null
//     }else{
//         let i=0
//         let curr = this.head
//         while(curr){
//            if(curr.value === value){
//             return i
//            }
//            curr = curr.next
//            i++
//         }
//         return null
//     }
//   }
//   reverse(){
//     if(this.isEmpty()){
//       return null
//     }else{
//       let prev = null
//       let curr = this.head
//       while(curr){
//         let next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//       }
//       this.head = prev
//     }
//   }
// }

// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.insert(1, 3);
// list.insert(0, 3);
// list.remove(2)
// list.removevalue(3)
// list.removevalue(5)
// list.removevalue(3);

// console.log(list.getSize());
// list.reverse()
// list.print();
// console.log( list.search(2))

// class Node{
//   constructor(value){
//     this.value = value
//     this.prev = null
//     this.next = null
//   }
// }

// class DoublyLinkedList{
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.size = 0
//   }

//   isEmpty(){
//     return this.size === 0
//   }
//   getSize(){
//     return this.size
//   }
//   append(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//       this.head = node
//       this.tail = node
//     }else{
//       this.tail.next = node
//       node.prev = this.tail
//       this.tail = node
//     }
//     this.size++
//   }
//   reversePrint(){
//     if(this.isEmpty()){
//       console.log("list is empty");
//     }else{
//       let curr = this.tail
//       let listvalues = ""
//       while(curr){
//         listvalues += `${curr.value} `
//         curr = curr.prev
//       }
//       console.log(listvalues)
//     }
//   }
// }

// const list = new DoublyLinkedList()
// list.append(2)
// list.append(1)
// list.reversePrint()

// function recursiveBinarysearch(arr,target,start=0,end=arr.length-1){
//     if(start>end){
//         return null
//     }
//     const mid = Math.floor((start+end)/2)
//     if(arr[mid]==target){
//         return mid
//     }
//     if(arr[mid]<target){
//         return recursiveBinarysearch(arr,target,mid+1,end)
//     }
//     return recursiveBinarysearch(arr,target,start,mid-1)
// }

// function binarySearch(arr,target){
//     let l = 0
//     let r = arr.length-1
//     while(l<=r){
//         let m = Math.floor((l+r)/2)

//         if(arr[m]=== target){
//             return m
//         }
//         if(arr[m]<target){
//             l = m+1
//         }
//         if(arr[m]>target){
//             r = m-1
//         }

//     }
//     return null
// }

// class Node{
//    constructor(value){
//     this.value = value
//     this.next = null
//    }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     insert(index,value){
//         const node = new Node(value)
//         if( index ===0){
//             if(this.isEmpty()){
//                 this.head=node
//             }else{
//                 node.next = this.head
//                 this.head = node
//             }

//         }else{
//             const prev = this.head
//             for(let i=1;i<index;i++){
//                 prev = prev.next
//             }
//             node.next =prev.next
//             prev.next = node

//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty')
//         }else{
//             let curr = this.head
//             let listvalues = ''
//             while(curr){
//                 listvalues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listvalues)

//         }
//     }
// }

// const list = new LinkedList()
// list.insert(0,3)
// list.insert(0,4)

// list.print()

// let arr = [1, 3, 3, 4, 5];

// add all using recursion

// let c=0
// let a =[]
// for(let i=0;i<arr.length;i++){

// }
// console.log(c)

// let str = "prabbrotocdbrotoefbroto";
// let substring = "broto"

//    for(let i=0;i<str.length;i++){

//    }

// let str = "prabbrotocdbrotoefbroto";
// // let ar =str.split('')
// // console.log(ar)
// let c = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "b") {
//     let sub = str.substring(i, i + 5);
//     // console.log(sub);
//     if (sub == "broto") {
//       c++;
//     }
//   }
// }
// // console.log(c);



// let arr = [1, 3, 3, 4, 5];
// let ar=new Set(arr)

//  let ar=Array.from(new Set(arr))
// console.log(ar)
// for(let i = 0;)

// const mySet = new Set([1, 2, 3]);
// console.log(mySet)
// const myArray = Array.from(mySet);
// console.log(myArray);

function findFrequencyWithoutObject(arr) {
    // Sort the array
    arr.sort();

    var currentElement = arr[0];
    var count = 1;

    // Iterate through the sorted array and count frequencies
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === currentElement) {
            // If the current element is the same as the previous one, increment count
            count++;
        } else {
            // If the current element is different, output the frequency and reset count
            console.log(currentElement + ": " + count);
            currentElement = arr[i];
            count = 1;
        }
    }

    // Output the frequency of the last element
    console.log(currentElement + ": " + count);
}

// Example usage
// findFrequencyWithoutObject(myArray);

let j = 222
let a = j.toString().split('')
let b = Number(a[0])+Number(a[1])

// obj.one=1
// obj['two']=2
// console.log(obj.one)

let arr = [1,2,3,4,5,6,7]
let l=0
let r=arr.length-1
let result
while(l<=r){
    let m=Math.floor((l+r)/2)
    if(arr[m]==5){
     result = m
    break;    }
    if(arr[m]<5){
        l =m+1
    }
    if(arr[m]>5){
        r = m-1
    }
}

// let ss='javad'
// let sss=ss.substring(0,3)

// let nnn= toString(123)
// let ssss= nnn.split('')
// console.log(ssss)

let obj={ '1': 3, '2': 2, '3': 1 }
console.log(Object.entries(obj))