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
    removeAt(index) {
        if (index < 0 && index > this.size) {
            return;
        }
        let current = this.head
        let previous
        let count = 0;
        if (index === 0) {
            this.head = current.next;

        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next
        }
        this.size--

    }
    insertAt(data, index) {
        if (index < 0 && index > this.size) {
            return;
        }
        if (index === 0) {
            this.insertFirst(data);
            return;
        } else {
            let node = new Node(data)
            let current, previous;
            current = this.head;
            let count = 0;
            while (count < index) {
                previous = current; // Node before index
                count++;
                current = current.next; // Node after index
            }

            node.next = current;
            previous.next = node;

            this.size++;

        }

    }
    getIndex(index){
      let current= this.head
      let count=0
      while (current) {
          if(current==index ){
            console.log(current.data);
          }
          count ++
          current=current.next
      }
      return null;
    }
    clearList() {
        this.head = null;
        this.size = 0;
    }
}
const ll = new LinkedList();
ll.insertFirst(1)
ll.insertLast(123)
ll.printListData()
ll.clearList()
ll.printListData()