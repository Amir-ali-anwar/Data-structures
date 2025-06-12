// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:


const majorityElement = function (nums) {
  const totalCounts = Math.floor(nums.length / 2);
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1;
    if (hashMap[nums[i]] > totalCounts) {
      return nums[i];
    }
  }
};

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));



// 26. Remove Duplicates from Sorted Array

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

 

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).



const _removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++
    }
  }
  return k
};

// console.log(_removeDuplicates([1, 1, 2]));


// 27. Remove Element

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




const __removeElement = (array, val) => {
  if (array.length === 0) return 0;
  let k = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== val) {
      array[k] = array[i];
      k++;
    }
  }
  return k;
};
const nums = [3, 2, 2, 3];
const val = 3;
// console.log(__removeElement(nums,val));


// 80. Remove Duplicates from Sorted Array II
// Medium
// Topics
// Companies
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

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

 

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.


const __removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i < nums?.length; i++) {
    if (i >= 2 && nums[i] === nums[i - 1] && nums[i] === nums[i - 2]) {
      continue;
    }
    nums[k] = nums[i];
    k++;
  }
  return k;
};

const duplicatesArray = [1, 1, 2, 2, 3, 3];
const duplicatesArray1 = [1, 1, 1, 2, 2, 3, 3, 3, 4];

// console.log(__removeDuplicates(duplicatesArray1));


// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


function maxProfit(arr) {
  if (arr.length < 2) return 0;
  let buyPrice = arr[0];
  let maxProfit = 0;
  let currentProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < buyPrice) {
      buyPrice = arr[i];
    } else {
      currentProfit = arr[i] - buyPrice;
      maxProfit = Math.max(currentProfit, maxProfit);
    }
  }
  return maxProfit;
}
const buySellArr = [7, 1, 5, 3, 6, 4];

// console.log(maxProfit(buySellArr));


// 189. Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


const rotate = function (nums, k) {
  let result = [];
  let resultval = nums.slice(nums.length - k, nums.length);
  result = resultval.concat(nums.slice(0, nums.length - k));
  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
}
  return result;
};

const rotatearray = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
// console.log(rotate(rotatearray, k));


// 13. Roman to Integer

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
// It is guaranteed that s is a valid roman numeral in the range [1, 3999]

const romanToInt = function (romanInput) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < romanInput.length; i++) {
    if (romans[romanInput[i]] < romans[romanInput[i + 1]]) {
      total -= romans[romanInput[i]];
    } else {
      total += romans[romanInput[i]];
    }
  }
  return total;
};

const s = "III";

// console.log(romanToInt(s));


// 28. Find the Index of the First Occurrence in a String



  // Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

  

  // Example 1:

  // Input: haystack = "sadbutsad", needle = "sad"
  // Output: 0
  // Explanation: "sad" occurs at index 0 and 6.
  // The first occurrence is at index 0, so we return 0.
  // Example 2:

  // Input: haystack = "leetcode", needle = "leeto"
  // Output: -1
  // Explanation: "leeto" did not occur in "leetcode", so we return -1.
  

  // Constraints:

  // 1 <= haystack.length, needle.length <= 104
  // haystack and needle consist of only lowercase English characters.


  const strStr = function (haystack, needle) {
    if (needle.length === 0) return 0;
    for (let left = 0; left < haystack.length - needle.length; left++) {
      let right = left + needle.length;
      if (haystack.slice(left, right) === needle) {
        return haystack.slice(left, right);
      }
    }
    return -1;
  };

  const haystack = "sadbutsad";
  const needle = "sad";

  console.log(strStr(haystack, needle));



  // Given an m x n matrix, return all elements of the matrix in spiral order.


const spiralOrder = function (matrix) {
  let result = [];
  if (!matrix || matrix.length === 0) return result;

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // Traverse Right
    for (let col = colBegin; col <= colEnd; col++) {
      result.push(matrix[rowBegin][col]);
    }
    rowBegin++;

    // Traverse Down
    for (let row = rowBegin; row <= rowEnd; row++) {
      result.push(matrix[row][colEnd]);
    }
    colEnd--;

    // Traverse Left
    if (rowBegin <= rowEnd) {
      for (let col = colEnd; col >= colBegin; col--) {
        result.push(matrix[rowEnd][col]);
      }
      rowEnd--;
    }

    // Traverse Up
    if (colBegin <= colEnd) {
      for (let row = rowEnd; row >= rowBegin; row--) {
        result.push(matrix[row][colBegin]);
      }
      colBegin++;
    }
  }

  return result;
};


const matrix= [[1,2,3],[4,5,6],[7,8,9]]

console.log(spiralOrder(matrix));
