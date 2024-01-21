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
    this.head = new Node(data,)

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
}

const firstObj = new LinkList()

firstObj.insertFirst(1)
firstObj.insertAtEnd(12)
console.log(firstObj);