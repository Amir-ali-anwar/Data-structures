// An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique i,  (where ), that can be referenced as  or .

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

import {NodeListV2,ArrayToLinkList,linkedListToArray} from './utils.js'
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
  



  // Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

// nums = [2, 7, 11, 15], target = 9

function twoSum(nums, target) {
    const prevMap = {}
    for (let index = 0; index < nums.length; index++) {
      const diff = target - nums[index]
      if (diff in prevMap) {
        return [prevMap[diff], index]
      }
      prevMap[nums[index]] = index
  
    }
    return []
  
  }
  
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  const result = twoSum(nums, target);
  
  console.log(result);
  
  
  
  // Problem Statement: Two Sum II - Input Array Is Sorted
  
  // You are given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, and an integer target. Write a function to find two numbers in the array such that they add up to the target number. Return the indices of the two numbers as an array [index1, index2], where:
  
  // 1 <= index1 < index2 <= numbers.length.
  // The returned array must consist of exactly two indices.
  // The indices should be in ascending order.
  
  function twoSumV2(nums, target) {
    let left = 0  
    let right = nums.length - 1
    while (left < right) {
      let currentSum = nums[left] + nums[right]
      if (currentSum < target) {
        left++
      }else
      if (currentSum > target) {
        right--
      }else if  (currentSum === target) {
        return [left + 1, right + 1]
      }
    }
  
  
  }
  
  const numsv2 = [2, 7, 11, 15];
  const targetv2 = 9;
  
  const resultv2 = twoSumV2(numsv2, targetv2);
  
  console.log(resultv2);
  
  
  
  // Add Two Numbers
  // You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
  // and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
  
// class NodeListV2 {
//     constructor(value = 0, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }
// function ArrayToLinkList(arr) {
//     const head = new NodeListV2();
//     let current = head;
//     for (const val of arr) {
//         current.next = new NodeListV2(val)
//         current = current.next
//     }
//     return head.next
// }
function addTwoNumbers(l1, l2) {
    let l1Node = ArrayToLinkList(l1);
    let l2Node = ArrayToLinkList(l2);
    let carry = 0
    let resultHead = new NodeListV2(); // To store the result
    let current = resultHead;
    while (l1Node || l2Node || carry > 0) {
        let v1 = (l1Node) ? l1Node.value : 0;
        let v2 = (l2Node) ? l2Node.value : 0;
        let sum = v1 + v2 + carry
        carry = Math.floor(sum / 10);
        const digit = sum % 10
        current.next = new NodeListV2(digit);
        current = current.next
        if (l1Node) l1Node = l1Node.next
        if (l2Node) l2Node = l2Node.next

    }
    return resultHead.next

}

const l1 = [2, 4, 3]
const l2 = [5, 6, 4]

const numberResult = addTwoNumbers(l1, l2);
console.log(linkedListToArray(numberResult));
  


// Problem Statement:
// Given a string, find the length of the longest substring that does not contain any repeating characters.


function repeatingCharacters(str) {
    let characters = new Set()
    let left=0,right = 0
    let result=0
  
      while (right<str.length) {
        if(!characters.has(str[right])){
          characters.add(str[right])
          result= Math.max(result, right - left + 1)
          right++
        }else{
          characters.delete(str[left])
          left++
        }
      }
       
    return result
  }
  const longestSubstring= 'abcabcbb'
  
  console.log(repeatingCharacters(longestSubstring));
  

  // Contains Duplicate

  //  Given an array of integers nums, determine whether any value appears at least twice in the array. 
  //  Your function should return true if any value appears at least twice in the array, and false if every element is distinct.


const duplicateSArray = [1, 2, 3, 1]

function isDuplicates(array) {
    let duplicatesSet = new Set();
     for (let index = 0; index < array.length; index++) {
        const currentElement = array[index];
        if (!duplicatesSet.has(currentElement)) {
            duplicatesSet.add(currentElement)
            return false
        } else {
            return true
        }
    }
}

console.log(isDuplicates(duplicateSArray));


// Given an integer array nums, return an array such that each element output[i] is equal to the product of all the elements of nums except nums[i].
// You must solve it without using division.
// You should not use extra space except for the output array.
// The solution should be completed in O(n) time complexity, where n is the length of the array.

function productExceptSelf(array) {
    let result = new Array(array.length).fill(1);
    let prefix = 1;
    let postfix = 1;
    for (let index = 0; index < array.length; index++) {
        result[index]*= prefix
        prefix *= array[index]

    }
    for (let index = array.length - 1; index >= 0; index--) {
        result[index]*= postfix
        postfix *= array[index]

    }
    return result
}

const productExceptSelfArray=[1,2,3,4]
console.log(productExceptSelf(productExceptSelfArray));




// const assendingArray = (arr) => {
//     let unsortedArray = []
//     let sortedArray = []
//     for (let index = 0; index < array.length; index++) {
       

//     }
//     return sortedArray
// }

// const array=[7,1,2,3,5,4]

// console.log(assendingArray(array));



// Given two strings s and t, return true if t is an anagram of s and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


let s = "anagram"; 
let t = "nagaram";


const isAnagram = (s, t) => {
    if (s.length !== t.length) return false
    const HashMap1 = {}
    for (const char in s) {
        HashMap1[char] = (HashMap1[char] || 0) + 1;

    }

    for (const key in t) {
        if (!HashMap1[t[key]]) {
            return false
        }
        HashMap1[char]--;
    }
    for (const key in HashMap1) {
        if (HashMap1[key] !== 0) {
            return false
        }

    }
    return true
}


console.log(isAnagram(s, t));

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum, and return its sum.

//nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4] outout=6

function max_subarray(nums) {
    let maxSum = -Infinity;
    let currentSum = 0;
    for (const key in nums) {
        currentSum = Math.max(nums[key], currentSum + nums[key])
        maxSum = Math.max(maxSum, currentSum)

    }
    return maxSum
}

const contiguousArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(max_subarray(contiguousArray));

const contiguousArray1 = [5, 4, -1, 7, 8]
console.log(max_subarray(contiguousArray1 ));



// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, and the only constraint stopping you from robbing all of them is that adjacent houses have security systems connected, so robbing two adjacent houses will trigger an alarm.

// Given an integer array nums representing the amount of money in each house, return the maximum amount of money you can rob without robbing two adjacent houses.

function rob(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    for (let i = 2; i < arr.length; i++) {
        arr[i] = Math.max(arr[i - 2] + arr[i], arr[i - 1])

    }
    return arr[arr.length - 1]
}   

const roBnums = [2, 7, 9, 3, 1]

console.log(rob(roBnums));


// Merge Two Sorted Lists - Leetcode 21 - Python

const mergeTwoList = (l1, l2) => {
    let l1Node = ArrayToLinkList(l1);
    let l2Node = ArrayToLinkList(l2);
    let resultHead = new NodeListV2(); // To store the result
    let current = resultHead;

    while (l1Node && l2Node) {
        if (l1Node.value < l2Node.value) {
            current.next = l1Node
            l1Node = l1Node.next
        } else {
            current.next = l2Node
            l2Node = l2Node.next
        }
        current = current.next
    }
    if (l1Node !== null) current.next = l1Node;
    if (l2Node !== null) current.next = l2Node;

    return resultHead.next

}
const list1 = [1, 3, 5];
const list2 = [2, 4, 6];

const mergedResult = mergeTwoList(list1, list2);
console.log(linkedListToArray(mergedResult));



// You are given an array of stock prices where prices[i] is the price of a given stock on day i. You need to find the maximum profit you can achieve by choosing a single day to buy one stock and a different day to sell it. Return the maximum profit or 0 if no profit can be made.


function maxProfit(arr) {
    if(arr.length<2) return 0;

    let buyPrice = arr[0]
    let maxProfit = 0;
    let currentProfit = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < buyPrice) {
            buyPrice = arr[i]
        } else {
            currentProfit = arr[i] - buyPrice
            maxProfit = Math.max(currentProfit, maxProfit)
        }

    }
    return maxProfit
}



const buySellArr= [7, 1, 5, 3, 6, 4]

console.log(maxProfit(buySellArr));

// You are climbing a staircase. It takes 
// 𝑛
// n steps to reach the top.

// Each time you can either climb 1 step or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n) {
    if (n === 1) return 1
    let step1 = 1
    let step2 = 2;
    for (let index = 3; index <= n; index++) {
        let current = step1 + step2;
        step1=step2
        step2= current;

    }
    return step2
    // console.log(current);

    // return steps
}


console.log(climbStairs(5));
