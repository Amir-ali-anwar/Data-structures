class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear-this.front===0;
  }
  peak(){
    return this.items[this.front]
  }
  size() {
    return this.rear-this.front
  }
  print() {
    console.log(this.items);
    return this.items;
  }
}
const queue= new Queue()

console.log(queue.isEmpty());

queue.enqueue(12)
queue.enqueue(13)
queue.enqueue(14)
queue.enqueue(15)
console.log(queue.dequeue());

console.log(queue.print());