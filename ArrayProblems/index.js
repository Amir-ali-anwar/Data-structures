
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


// via Linklist


class NodeList {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}
function arrayToList(arr) {

  const head = new NodeList();
  let current = head
  for (let val of arr) {
    current.next = new NodeList(val);
    current = current.next;
  }
  return head.next;
}
function listToArray(list) {
  let array = []
  while (list !== null) {
    array.push(list.val);
    list = list.next;
  }
  return array;
}
function addNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1, q = l2, current = dummyHead;
  let carry = 0;
  while (p !== null || q !== null) {
    let x = (p !== null) ? p.val : 0;
    let y = (q !== null) ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummyHead.next;
}
let list = [2, 7, 11, 15];
// console.log(arrayToList(list));




// Given a string s, find the length of the longest substring without repeating characters.

//   Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
function lengthOfLongestSubstring(tr) {
  let trIntoArr = tr.split('');
  let maxLength = 0;

  for (let i = 0; i < trIntoArr.length; i++) {
    for (let j = trIntoArr.length; j > i; j--) { // Corrected the ending index
      let substring = tr.substring(i, j);
      if (isValidSubstring(substring)) {
        maxLength = Math.max(maxLength, substring.length);
        break;
      }
    }
  }
  return maxLength;
}

function isValidSubstring(substring) {
  let set = new Set()
  for (const char of substring) {
    if (set.has(char)) {
      return false
    }
    set.add(char)
  }
  return true
}
const inputString = "abcabcbb";

// console.log(lengthOfLongestSubstring(inputString));

//v2


function lengthOfLongestSubstringV2(Str) {
  let maxLength = 0;
  let left = 0; 
  let charMap = new Map()
  for (let right = 0; right < Str.length; right++) {
    let currentCharacter = Str.charAt(right)
    // console.log(currentCharacter);
    if (charMap.has(currentCharacter)) {
      charMap.delete(Str.charAt(left));
      left++
    }
    charMap.set(currentCharacter);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength
}

// console.log(lengthOfLongestSubstringV2(inputString));

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000

// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

// Input Format

// The first line contains an integer, , the size of the array.
// The second line contains  space-separated integers that describe .

// Constraints



// Output Format

// Print the following  lines, each to  decimals:

// proportion of positive values
// proportion of negative values
// proportion of zeros
// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
// Sample Output

// 0.500000
// 0.333333
// 0.166667
// Explanation

// There are  positive numbers,  negative numbers, and  zero in the array.
// The proportions of occurrence are positive: , negative:  and zeros: .


function plusMinus(arr) {
  // Write your code here
  let positionNumber = 0;
  let negativeNumber = 0;
  let zeroNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      // console.log(arr[i]);
      negativeNumber ++
    }
    if (arr[i] > 0) {
      positionNumber ++;
    }
    if (arr[i] === 0) {
      zeroNumber ++;
    }
  }
  console.log((positionNumber/arr.length).toFixed(7));
  console.log((negativeNumber/arr.length).toFixed(7));
  console.log((zeroNumber/arr.length).toFixed(7));
  
}


const arr = [-4, 3, -9, 0, 4, 1]

console.log(plusMinus(arr));
