class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  isEmpty() {
    return this.root === null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if (root.right === null) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false
    }
    if (root.value === value) {
      return true
    }
    if (value < root.value) {
      return this.search(root.left, value)
    } else {
      return this.search(root.right, value)
    }
  }
  PreOrder(root){
    if(root){
      console.log(root.value);
      this.PreOrder(this.left)
      this.PreOrder(this.right)
    }
  }
}

const BST = new BinarySearchTree()

console.log('Tree is Empty', BST.isEmpty());

BST.insert(10)
BST.insert(5)
BST.insert(15)
BST.insert(3)
BST.insert(7)

console.log(BST.search(BST.root, 10));
console.log(BST.search(BST.root, 5));
console.log(BST.search(BST.root, 15));
console.log(BST.search(BST.root, 3));
console.log(BST.search(BST.root, 7));
BST.PreOrder(BST.root)