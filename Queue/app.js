// Queue data structure follows the principle of First in first out(FIFO)
// Queue data structure supports two main operations
// Enqueue=> which adds elements to the tail/rear of the collection
// Dequeue=> which removes the elements to the front/head of the collection

// Queue Usage
//=> Printers
//=> CPU task scheduling
//=> Callback queue in javascript runtime.

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(elements) {
    return this.items.push(elements);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
    return this.items.toString();
  }
  peak(){
    if(!this.isEmpty()){
        return this.items[0]
    }
    return null
  }
}
const queue= new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue(5)
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.print());
