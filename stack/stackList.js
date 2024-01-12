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

// class LinkedListStack {
//     constructor() {
//       this.list = new LinkedList();
//     }
  
//     push(value) {
//       this.list.prepend(value);
//     }
  
//     pop() {
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
  
//   const stack = new LinkedListStack();
//   console.log(stack.isEmpty());
//   stack.push(20);
//   stack.push(10);
//   stack.push(30);
//   console.log(stack.getSize());
//   stack.print();
//   console.log(stack.pop());
//   stack.print();
//   console.log(stack.peek());
  

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  print() {
    if (this.isEmpty()) {
      console.log('stack is empty');
    } else {
      let curr = this.top;
      let stackValues = '';
      while (curr) {
        stackValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(stackValues);
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.top = null;
    this.size = 0;
  }

  toArray() {
    let result = [];
    let curr = this.top;
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }
    return result;
  }

  concatenate(anotherStack) {
    if (anotherStack.isEmpty()) {
      return;
    }
    let curr = anotherStack.top;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = this.top;
    this.top = anotherStack.top;
    this.size += anotherStack.size;
    anotherStack.clear();
  }

  reverse() {
    const tempStack = new Stack();
    while (!this.isEmpty()) {
      tempStack.push(this.pop());
    }
    this.top = tempStack.top;
    this.size = tempStack.size;
  }
  // addLast(){
  //   let curr =this.top.value
  //   const stac=new Stack()
  //   stac.push(1)
  //   stac.push(2)
  //   stac.push(7)
  //   let arr=[]
  //   arr.push(s.pop())
  //   arr.push(stac.pop())
  //   console.log(arr)
  //   let sum = arr[1]+arr[0]
  //   console.log(sum)
  // }
}

const s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);

const s2 = new Stack();
s2.push(3);
s2.push(4);
s2.push(5);

s1.print();
s2.print();

console.log(s1.pop() + s2.pop())

// s.reverse()
// s.addLast()
