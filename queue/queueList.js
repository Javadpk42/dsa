// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//       this.size = 0;
//     }
  
//     isEmpty() {
//       return this.size === 0;
//     }
  
//     getSize() {
//       return this.size;
//     }
  
//     prepend(value) {
//       const node = new Node(value);
//       if (this.isEmpty()) {
//         this.head = node;
//         this.tail = node;
//       } else {
//         node.next = this.head;
//         this.head = node;
//       }
//       this.size++;
//     }
  
//     append(value) {
//       const node = new Node(value);
//       if (this.isEmpty()) {
//         this.head = node;
//         this.tail = node;
//       } else {
//         this.tail.next = node;
//         this.tail = node;
//       }
//       this.size++;
//     }
  
//     removeFromFront() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       const value = this.head.value;
//       this.head = this.head.next;
//       this.size--;
//       return value;
//     }
  
//     removeFromEnd() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       const value = this.tail.value;
//       if (this.size === 1) {
//         this.head = null;
//         this.tail = null;
//       } else {
//         let prev = this.head;
//         while (prev.next !== this.tail) {
//           prev = prev.next;
//         }
//         prev.next = null;
//         this.tail = prev;
//       }
//       this.size--;
//       return value;
//     }
  
//     reverse() {
//       let current = this.head;
//       let prev = null;
//       let next = null;
//       while (current) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//       }
//       this.tail = this.head;
//       this.head = prev;
//     }
  
//     print() {
//       if (this.isEmpty()) {
//         console.log("List is empty");
//       } else {
//         let curr = this.head;
//         let list = "";
//         while (curr) {
//           list += `${curr.value}->`;
//           curr = curr.next;
//         }
//         console.log(list);
//       }
//     }
//   }

  
//   class LinkedListQueue {
//     constructor() {
//       this.list = new LinkedList();
//     }
  
//     enqueue(value) {
//       this.list.append(value);
//     }
  
//     dequeue() {
//       return this.list.removeFromFront();
//     }
  
//     peek() {
//       return this.list.head.value;
//     }
  
//     isEmpty() {
//       return this.list.isEmpty();
//     }
  
//     getSize() {
//       return this.list.getSize();
//     }
  
//     print() {
//       return this.list.print();
//     }
//   }
  
//   const queue = new LinkedListQueue();
//   console.log(queue.isEmpty());
//   queue.enqueue(10);
//   queue.enqueue(20);
//   queue.enqueue(30);
//   console.log(queue.getSize());
//   queue.print();
//   console.log(queue.dequeue());
//   queue.print();
//   console.log(queue.peek());


class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}
class queue{
  constructor(){
    this.front=null
    this.rear=null
    this.size=0
  }
  isEmpty(){
    return this.size===0
  }
  enqueue(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.front=node
      this.rear=node
    }else{
      this.front.next=node
      this.front=node
    }
    
    this.size++
  }
  dequeue(){
    if(this.isEmpty()){
      return null
    }
    let dq=this.rear.value
    this.rear=this.rear.next
    this.size--
    return dq
  }
  print(){
    if(this.isEmpty()){
      console.log('queue is empty')
    }else{
      let curr = this.rear
      let qvalues =''
      while(curr){
        qvalues += `${curr.value} `
        curr = curr.next
      }
      console.log(qvalues)
    }
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.rear.value;
  }
  getSize() {
    return this.size;
  }
  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  toArray() {
    let result = [];
    let curr = this.rear;
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }
    return result;
  }
  concatenate(anotherQueue) {
    if (anotherQueue.isEmpty()) {
      return;
    }
    this.front.next = anotherQueue.rear;
    this.front = anotherQueue.front;
    this.size += anotherQueue.size;
    anotherQueue.clear();
  }
  reverse() {
    if (this.isEmpty()) {
      return;
    }
    let stack = [];
    while (!this.isEmpty()) {
      stack.push(this.dequeue());
    }
    while (stack.length > 0) {
    this.enqueue(stack.pop())
    }
  }
       
  
}
const q=new queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.print()
q.reverse()
q.print()