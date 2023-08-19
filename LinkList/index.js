class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    // Prepend has the constant time complexity o(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    // Prepend has the constant time complexity o(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(value, index) {
        if (index > this.size || index < 0) {
            return
        }
        if(index===0){
            this.prepend(value)
            return 
        }
    }
    print() {
        let curr = this.head;
        let storedValues = ''
        while (curr) {
            storedValues += `${curr.value} `
            curr = curr.next
        }
        console.log({ storedValues })
    }
}
const list = new LinkedList()
console.log('====================================');
console.log("list size", list.getSize());
console.log("list empty", list.isEmpty());
list.print()
list.prepend(60)
list.prepend(10)
list.prepend(40)
list.prepend(0)
list.append(100)
list.append(101)
list.print()
console.log('====================================');