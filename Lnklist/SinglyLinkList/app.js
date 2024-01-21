class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkList {
  constructor() {
    this.head = null

  }
  insertFirst(data) {
    this.head = new Node(data,this.head)

  }
  getSize() {
    let count = 0;
    let current = this.head
    while (current) {
      count++
      current = current.next
    }
    return count
  }
  insertAtEnd(data) {
    const dataNode = new Node(data)
    if (!this.head) {
      this.head = dataNode
      return;
    }
    const currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = dataNode
  }
  insertAt(data, index) {
    if (index < 0 || index > this.getSize()) {
      return;
    }
    if (index === 0 || !this.head) {
      this.insertFirst(data)
      return;
    } else {
      let newNode = new Node(data)
      const currentNode = this.head
      let count = 0
      while (count < index - 1 && count.next) {
        currentNode = currentNode.next
        count++
      }
      newNode.next = currentNode.next
      currentNode.next = newNode
    }
  }
  clearList() {
    this.head = null
  }
  isEmpty() {
    return this.getSize() === 0
  }
  printList(){
    if(this.isEmpty()){
      console.log("List is empty");
      throw new Error("List is empty")
    }else{
      let curr= this.head;
      let list=''
      while (curr) {
        list += `${curr.data}`;
        curr = curr.next;
      }
      return list
    }
  }
}

const firstObj = new LinkList()

firstObj.insertFirst(1)
// firstObj.insertAtEnd(12)
// firstObj.insertAt(12, 3)
// firstObj.isEmpty()
// firstObj.isEmpty()
console.log(firstObj.getSize());
console.log(firstObj.printList());