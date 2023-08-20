// create the single node
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }
    insertLast(data) {
        let node = new Node(data)
        let current = ''
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head
            while (current.head) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    printListData() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }

    }
}
const ll = new LinkedList();
ll.insertFirst(1)
ll.insertLast(123)
ll.printListData()