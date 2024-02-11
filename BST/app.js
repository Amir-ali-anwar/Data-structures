class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root) {
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){

    }
}

const BST= new BinarySearchTree()

console.log('Tree is Empty', BST.isEmpty());