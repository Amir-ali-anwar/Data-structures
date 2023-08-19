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
    prepend(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head= node
        }
        this.size++
    }
}
const list = new LinkedList()
console.log('====================================');
console.log("list empty", list.getSize());
console.log("list empty", list.isEmpty());
list.prepend(10)
list.prepend(40)
list.prepend(60)
console.log('====================================');