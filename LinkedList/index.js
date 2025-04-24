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
        if (index === 0) {
            this.prepend(value)
            return
        } else {
            let node = new Node(value)
            let prev = this.head
            for (let index = 0; index < index - 1; index++) {
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node
            this.size++
        }

    }
    removeFrom(index) {
        if (index > this.size || index < 0) {
            return
        }
        let removeNode = this.head
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--
            return value
        } else {
            let prev = this.head;
            while (prev.next && prev.next !== value) {
                prev = prev.next
            }
            if (prev.next) {
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0;
        let current= this.head
        while (current) {
            if(current.next.value===value){
               return i
            }
            current= current.next;
            i++
        }
        return -1
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
console.log("list size", list.getSize());
console.log("list empty", list.isEmpty());
// list.print()
list.insert(10, 0)
list.insert(20, 1)
list.insert(30, 1)
console.log(list.getSize())
console.log(list.removeFrom(1))
// list.insert(50,3)    
list.print()
