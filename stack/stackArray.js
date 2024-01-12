class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.toString());
    }
    removeMiddle() {
      if (this.isEmpty()) {
        console.log('Stack is empty');
        return;
      }
  
      const auxiliaryStack = new Stack();
      const middleIndex = Math.floor(this.items.length / 2);
  
      for (let i = 0; i < middleIndex; i++) {
        auxiliaryStack.push(this.pop());
      }
  
      this.pop();
  
      while (!auxiliaryStack.isEmpty()) {
        this.push(auxiliaryStack.pop());
      }
    }
    
  }
  
function evaluatePostfix(expression) {
  const stack = new Stack();

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (!isNaN(char)) {
      // If it's a number, push onto the stack
      stack.push(parseInt(char));
    } else {
      // If it's an operator, pop two operands, perform the operation, and push the result back
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      switch (char) {
        case '+':
          stack.push(operand1 + operand2);
          break;
        case '-':
          stack.push(operand1 - operand2);
          break;
        case '*':
          stack.push(operand1 * operand2);
          break;
        case '/':
          stack.push(operand1 / operand2);
          break;
        default:
          throw new Error(`Invalid operator: ${char}`);
      }
    }
  }

  // The final result should be on the top of the stack
  return stack.pop();
}
const result = evaluatePostfix("12+*");
console.log(result);
  
  const stack = new Stack();
  console.log(stack.isEmpty());
  stack.push(20);
  stack.push(10);
  stack.push(30);
  stack.print()
  // console.log(stack.size());
  // stack.print();
  // console.log(stack.pop());
  // console.log(stack.peek());
  // stack.print();
  stack.removeMiddle()
  stack.print()