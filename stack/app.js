class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    return this.items.push(element);
  }
  pop(element) {
    return this.items.pop(element);
  }
  peak() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.size());
