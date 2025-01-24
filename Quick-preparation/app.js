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

import { NodeListV2, ArrayToLinkList, linkedListToArray } from './utils.js'
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


// const findLongestSubstring = (s) => {
//     let start = 0
//     let hashmap = {};
//     let maxLength = 0
//     for (let end = 0; end < s.length; end++) {
//         let char = s[end]
//         if (hashmap[char] !== undefined) {
//             start = hashmap[char] + 1;
//         }

//         hashmap[end] = char
//         maxLength = Math.max(maxLength, end - start + 1)
//     }
// }   

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


function isValid(s) {
    // const separateString=s.join(",")
    // console.log(separateString);
    let valuestatus = ''
    for (let i = 0; i < s.length; i++) {
        const currentParentheses = s[i].split(',')
        if (currentParentheses[i].startsWith() === currentParentheses[i].endsWith()) {
            return valuestatus = 'valid'
        }
        return valuestatus = 'Invalid'
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
        } else
            if (currentSum > target) {
                right--
            } else if (currentSum === target) {
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
    let left = 0, right = 0
    let result = 0

    while (right < str.length) {
        if (!characters.has(str[right])) {
            characters.add(str[right])
            result = Math.max(result, right - left + 1)
            right++
        } else {
            characters.delete(str[left])
            left++
        }
    }

    return result
}
const longestSubstring = 'abcabcbb'

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
        result[index] *= prefix
        prefix *= array[index]

    }
    for (let index = array.length - 1; index >= 0; index--) {
        result[index] *= postfix
        postfix *= array[index]

    }
    return result
}

const productExceptSelfArray = [1, 2, 3, 4]
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
console.log(max_subarray(contiguousArray1));



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
    if (arr.length < 2) return 0;

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



const buySellArr = [7, 1, 5, 3, 6, 4]

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
        step1 = step2
        step2 = current;

    }
    return step2
    // console.log(current);

    // return steps

}

// console.log(climbStairs(5));

// invert the Binary Tree

// Given the root of a binary tree, invert the tree and return its root.

// Definition: Inverting a binary tree means swapping the left and right subtrees of all nodes in the tree.


//  const invertTree=(arr)=>{
//    if(arr.length===0) return null
//     for (let index = 1; index < arr.length; index++) {

//     }
// }

function ArrayTOTree(value) {
    this.value = value
    this.left = null
    this.right = null
}
function arrayToTree(arr) {
    if (!arr.length) return null
    const Nodes = arr?.map((value) => {
        return value !== null ? new ArrayTOTree(value) : null
    })
    for (let index = 0; index < arr.length; index++) {
        if (Nodes[index] !== null) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            if (leftIndex < arr.length && Nodes[leftIndex] !== null) {
                Nodes[index].left = Nodes[leftIndex];
            }

            // Set right child if it exists
            if (rightIndex < arr.length && Nodes[rightIndex] !== null) {
                Nodes[index].right = Nodes[rightIndex];
            }
        }

    }
    return Nodes[0]

}
function printTree(node) {
    if (!node) return;
    printTree(node.left);  // Traverse left subtree
    console.log(node.value); // Print root value
    printTree(node.right);  // Traverse right subtree
}

const rootArray = [4, 2, 7, 1, 3, 6, 9]

const treeRoot = arrayToTree(rootArray);
printTree(treeRoot);

// You are given an integer array arr. You need to replace each element in the array with the greatest element that is to its right. The last element should be replaced by -1 because there is no element to its right.

const replaceElements = (arr) => {
    let max_value = -1;
    for (let index = arr.length - 1; index >= 0; index--) {
        let temp = arr[index];
        arr[index] = max_value;
        max_value = Math.max(max_value, temp);
    }
    return arr;
}

const toBeReplacedArray = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(toBeReplacedArray));


// you are given a non-empty array of integers, nums, where every element appears twice except for one. Find the single element that does not appear twice.

// You must implement a solution with a linear runtime complexity (O(n)) and use only constant extra space (O(1)).



const singleNumber = (array) => {
    let sing = 0;
    for (let index = 0; index < array.length; index++) {
        sing = sing ^ array[index];

    }
    return sing
}

const ArrayOfDuplicates = [4, 1, 2, 1, 2]

console.log(singleNumber(ArrayOfDuplicates));


// Palindrome Number
// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// Constraints:

// -231 <= x <= 231 - 1


// Follow up: Could you solve it without converting the integer to a string?


function isPalindrome(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

    let half = 0;
    while (x > half) {
        half = half * 10 + (x % 10);  // Extract the last digit of x
        x = Math.floor(x / 10);  // Remove the last digit from x
    }

    // Compare the reversed half with the remaining part of x
    return x === half || x === Math.floor(half / 10);
}


console.log(isPalindrome(121));


//  Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.



// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

const RomanToInt = (romanInput) => {
    const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = 0
    for (let index = 0; index < romanInput.length; index++) {
        if (romans[romanInput[index]] < romans[romanInput[index + 1]]) {
            total -= romans[romanInput[index]]
        } else {
            total += romans[romanInput[index]]
        }


    }

    return total

}

let romanInput = "MCMXCIV"

console.log(RomanToInt(romanInput));

// Longest Common Prefix


// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs) {
    if (strs.length === 0) return ''
    let base = strs[0]
    for (let i = 0; i < base.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (i >= strs[j].length || base[i] !== strs[j][i]) {
                return base.slice(0, i)
            }
        }
    }
    return base
}

let strs = ["flower", "flow", "flight"]

console.log(longestCommonPrefix(strs));


// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.


const removeDuplicatesV1 = (array) => {
    if (array.length === 0) return 0
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i - 1]) {
            array[k] = array[i]
            k++
        }


    }
    return k
}


let ContainsDuplicates = [1, 1, 2]

console.log(removeDuplicatesV1(ContainsDuplicates));



// 27. Remove Element

// let ContainsDuplicates = [1, 1, 2]

// console.log(removeDuplicatesV1(ContainsDuplicates));


// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.



// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeElement(array, val) {
    if (array.length === 0) return 0
    let k = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== val) {
            array[k]=array[i]
            k++
        }

    }
   return k
}

let Duplicatednums = [3, 2, 2, 3]
let val = 2
console.log(removeElement(Duplicatednums,val));


// truthniess and logical operators

// if (unserInput !== null && unserInput !== '') {

// }

// above statement can be written as shorten 

// if(unserInput){

// }


// but the second case didn't accept if we pass zero .



// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".
 

// Constraints:

// 0 <= args.length <= 10

var createHelloWorld = function() {
    
    return function(...args) {
        // console.log('Hello World')  
        return 'Hello World'
    }   
};

createHelloWorld()

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

const counter= function(n) {
    return function() {
        return n++
    };
};

counter(1)
counter(2)
counter(3)


// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

 

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function
 

// Constraints:

// -1000 <= x <= 1000
// 0 <= functions.length <= 1000
// all functions accept and return a single integer




var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x); 
    }
};

 const fn = compose([x => x + 1, x => 2 * x])

 console.log(fn(4));
 

//  Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 

// Example 1:

// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2
// Example 2:

// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// // "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// // "getCallCount" - total call count: 2
// Example 3:

// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]
// Explanation:
// fib(5) = 8 // "call"
// // "getCallCount" - total call count: 1
 

// Constraints:

// 0 <= a, b <= 105
// 1 <= n <= 10
// 1 <= actions.length <= 105
// actions.length === values.length
// actions[i] is one of "call" and "getCallCount"
// fnName is one of "sum", "factorial" and "fib"


function memoize(fn) {
    const cache={}    
    return function(...args) {
      const key= JSON.stringify(args)
      if(key in cache){
        return cache[key]
      }
      cache[key]= fn(...args)
      return cache[key]      
    }
}
let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
    return a + b;
  })
  memoizedFn(2, 3) // 5
  memoizedFn(2, 3) // 5
 console.log({callCount})


//  Add Two Promises

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// Example 1:


// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

// Example 2:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

const addTwoPromises = async function (promise1, promise2) {
    return Promise.all([promise1, promise2]).then(([result1,result2]) => {
        return result1 + result2
    }).catch((err) => {
        console.log(err);
        throw new Error(err)
    })
};

 addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   .then(console.log); // 4


//    Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

//    Example 1:
   
//    Input: millis = 100
//    Output: 100
//    Explanation: It should return a promise that resolves after 100ms.
//    let t = Date.now();
//    sleep(100).then(() => {
//      console.log(Date.now() - t); // 100
//    });
//    Example 2:
   
//    Input: millis = 200
//    Output: 200
//    Explanation: It should return a promise that resolves after 200ms.
    
   
//    Constraints:
   
//    1 <= millis <= 1000

async function sleep(millis) {
    await new Promise((resolve,reject)=>{
        setTimeout(resolve,millis)
    })
}   

let time = Date.now()
sleep(100).then(() => console.log(Date.now() - time)) //


// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

const mySqrt = (x) => {
  let left = 0;
  let right = x
  while (left <= right) {
    let mid =  Math.floor((left + right) / 2)
    if (mid * mid === x) {
      return mid
    }
    else if (mid * mid < x) {
      left = mid + 1
    } else {
      right = mid - 1
   }
  }
  return right
}


console.log(mySqrt(4));

// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

 

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.
 

// Constraints:

// obj is a valid JSON object or array
// 2 <= JSON.stringify(obj).length <= 105
 

// Can you solve it in O(1) time?
const isEmpty = function (obj) {
    let isObject = obj !== null && typeof obj === 'object'
    if (isObject.length === 0) {
        return true
    } else {
        return false
    }

};
let obj = {"x": 5, "y": 42}

console.log(isEmpty(obj));





//  Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 

// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn); 
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called
// Example 2:

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called
 

// Constraints:

// calls is a valid JSON array
// 1 <= calls.length <= 10
// 1 <= calls[i].length <= 100
// 2 <= JSON.stringify(calls).length <= 1000
