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
}

const firstObj = new LinkList()

firstObj.insertFirst(1)
console.log(firstObj);