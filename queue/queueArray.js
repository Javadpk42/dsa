// class Queue {
//     constructor() {
//       this.items = [];
//     }
  
//     enqueue(element) {
//       this.items.push(element);
//     }
  
//     dequeue() {
//       return this.items.shift();
//     }
  
//     peek() {
//       if (!this.isEmpty()) {
//         return this.items[0];
//       }
//       return null;
//     }
  
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     size() {
//       return this.items.length;
//     }
  
//     print() {
//       console.log(this.items.toString());
//     }
//   }
  
//   const queue = new Queue();
//   console.log(queue.isEmpty());
//   queue.enqueue(10);
//   queue.enqueue(20);
//   queue.enqueue(30);
//   console.log(queue.size());
//   queue.print();
//   console.log(queue.dequeue());
//   console.log(queue.peek());
//   queue.print();
  

class Queue{
  constructor(){
    this.item=[]
  }
  enqueue(element){
    this.item.push(element)
  }
  print(){
    console.log(this.item.toString())
  }
  dequeue(){
    this.item.shift()
  }
}
const q = new Queue()
q.enqueue(1)
q.enqueue(2)

q.enqueue(3)

q.print()
q.dequeue()
q.print()