// An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  or .

// Reverse an array of integers.

// Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

// Example

// Return .

// Function Description

// Complete the function reverseArray in the editor below.

// reverseArray has the following parameter(s):

// int A[n]: the array to reverse
// Returns

// int[n]: the reversed array
// Input Format

// The first line contains an integer, , the number of integers in .
// The second line contains  space-separated integers that make up .


function reverseArray(a) {
    // Write your code here
    let reverseArray = []
    for (let i = a.length - 1; i >= 0; i--) {
        a[i];
        reverseArray.push(a[i])


    }
    return reverseArray
}


// console.log(reverseArray([1, 2, 3]));


// Second Problem


// This is an to practice traversing a linked list. Given a pointer to the head node of a linked list, print each node's  element, one per line. If the head pointer is null (indicating the list is empty), there is nothing to print.

// Function Description

// Complete the printLinkedList function in the editor below.

// printLinkedList has the following parameter(s):

// SinglyLinkedListNode head: a reference to the head of the list
// Print

// For each node, print its  value on a new line (console.log in Javascript).
// Input Format

// The first line of input contains , the number of elements in the linked list.
// The next  lines contain one element each, the  values for each node.

// Note: Do not read any input from stdin/console. Complete the printLinkedList function in the editor below.

// Constraints

// , where  is the  element of the linked list.
// Sample Input

// 2
// 16
// 13
// Sample Output

// 16
// 13
// Explanation

// There are two elements in the linked list. They are represented as 16 -> 13 -> NULL. So, the printLinkedList function should print 16 and 13 each on a new line



class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;  // The value of the node
        this.next = null;  // Pointer to the next node
    }
}
function printLinkedList(head) {

    let currentNode = head
    while (currentNode) {
        console.log(currentNode.data); // Print the data of the current node

        currentNode = currentNode.next
    }
}

let head = new SinglyLinkedListNode(16)
head.next = new SinglyLinkedListNode(13)


// printLinkedList(head)


// Third template

// Find the longest substring without repeating characters in javascript

function findLongestSubstring(s) {
    let start = 0;
    let max_length = 0;
    let charIndexMap = {};
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1
        }
        charIndexMap = end
        max_length = Math.max(max_length, end - start + 1);

    }
    return max_length
}



// Example usage
const input = "abcabcbb";
console.log(findLongestSubstring(input)); // Output: 3 ("abc")


// Rotate an array by a certain number of positions. 

const leftRotate = (arr, positions) => {
    const n = arr.length
    positions %= n
    console.log(arr.slice(0, positions));


    return arr.slice(positions).concat(arr.slice(0, positions))


}

const arr = [1, 2, 3, 4, 5];
const positions = 2;

console.log(leftRotate(arr, positions));




function bob() {
    let a = 12;
    let b = 13
    var c = 123

    if (true) {
        let a = 12;
        let b = 24
        var c = 25
        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    console.log(b);
    console.log(c);

}

bob()


// Merge two sorted arrays.

const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2).sort((a, b) => a - b)
}


const arr1 = [1, 3, 5, 7, 9]
const arr2 = [2, 4, 6, 8, 10]

//Inorder, Preorder, Postorder traversals. In javascript

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

// 1. Inorder Traversal (Left → Root → Right):

const inOrderTraversal = (node, result = []) => {
    if (node) {
        inOrderTraversal(node.left, result)
        result.push(node.value)
        inOrderTraversal(node.right, result)
    }
    return result

}

const preorderTraversal = (node, result = []) => {
    if (node) {
        result.push(node.value)
        inOrderTraversal(node.left, result)
        inOrderTraversal(node.right, result)
    }
    return result

}

const postorderTraversal = (node, result = []) => {
    if (node) {
        inOrderTraversal(node.left, result)
        inOrderTraversal(node.right, result)
        result.push(node.value)
    }
    return result

}

// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Perform traversals
console.log("Inorder:", inOrderTraversal(root)); // Output: [4, 2, 5, 1, 6, 3, 7]
console.log("Preorder:", preorderTraversal(root)); // Output: [1, 2, 4, 5, 3, 6, 7]
console.log("Postorder:", postorderTraversal(root)); // Output: [4, 5, 2, 6, 7, 3, 1]



// Valid Parentheses


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:
// Input: s = "()"
// Output: valid
// Example 2:
// Input: s = "()[]{}"
// Output: valid
// Example 3:
// Input: s = "(]"
// Output: invalid
// Example 4:
// Input: s = "([)]"
// Output: invalid
// Example 5:
// Input: s = "{[]}"
// Output: valid
// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'


 function isValid(s){
    // const separateString=s.join(",")
    // console.log(separateString);
    let valuestatus= ''
    for (let i = 0; i < s.length; i++) {
        const currentParentheses= s[i].split(',') 
        if(currentParentheses[i].startsWith()===currentParentheses[i].endsWith()){
            return valuestatus = 'valid'
        }
        return valuestatus='Invalid'
    }
    
 }


const inputs = [
    "()",
    "()[]{}",
    "(]",
    "([)]",
    "{[]}",
    "(",
    "((((()))))",
    "[{()}]",
    "]{",
    "[(])"
  ];
  



  console.log(isValid(inputs));
  