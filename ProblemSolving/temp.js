// Longest Substring Without Repeating Characters


function lengthOfLongestSubstring(s) {
    let left = 0
    let right = 0;
    let maxLength = 0
    let hashmap = {}
    while (right <= s.length-1) {
       if (!hashmap[s[right]]){
            hashmap[s[right]]= s[right]
            right++
        } else{
            delete hashmap[s[left]]
            left ++
        }
    maxLength= Math.max(maxLength,right - left)
    }
    return maxLength 
};




// Longest Common Prefix


function longestCommonPrefix(s) {
    let prefix = s[0]
      for (let i = 1; i < s.length; i++) {
        while (!s[i].startsWith(prefix)) {
           prefix = prefix.slice(0,-i) 
        }
        
    }
    return prefix

}

const strs = ["flower","flow","flight"]

// console.log(longestCommonPrefix(strs))



//  26. Remove Duplicates from Sorted Array


function removeDuplicates(s) {
    let result = []
    let k=1
    for (let i = 0; i < s.length-1; i++) {
        const element = s[i];
        if (element !== s[i - 1]) {
            result.push(element)
            k++
        }

    }
    return k
}

const nums = [0,0,1,1,1,2,2,3,3,4]
const nums1 = [1,1,2]
// console.log(removeDuplicates(nums1));



// 9. Palindrome Number


function isPalindrome(s) {
    let numToString = s.toString();
    let left = 0
    let right = numToString.length - 1
    while (left <= right) {
        if (numToString[left] !== numToString[right]) {
            return false
        } 
        
            left ++
            right--
    }
    return true

}


const x = 1111


// console.log(isPalindrome(x));


// 1929. Concatenation of Array

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]
 



function getConcatenation(array) {
    let result = []
    Array.from({ length: 2 }, () => {
        for (let i = 0; i < array?.length; i++) {
            const element = array[i];
            result.push(element)
        }
    })

    return result
}

const nums2 = [1,3,2,1]

// console.log(getConcatenation(nums2));



// 242. Valid Anagram


// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


function isAnagram(s, t) {
    if(s.length !== t.length) return false
    const hashmap={}
    for (const element of s) {
        // hashmap[]
        hashmap[element]= (hashmap[element] || 0) + 1
        
    }    
    for (const element of t) {
        if(!hashmap[element]){
            return false
        }
        hashmap[element] -- 
    }

    return true
    
}



let s = "anagram";
let t = "nagaram";
// console.log(isAnagram(s,t));




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
 

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100



function removeElement(nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element!==val) {
            nums[k] = nums[i]
            k++
        }

    }
    return k
}


const nums3 = [0,1,2,2,3,0,4,2] 
const val = 2


// console.log(removeElement(nums3, val));


// Minimum Size Subarray Sum (LeetCode 209)

//  if (currentsum === target) {
//             minWindow = Math.min(left - right)
//             return minWindow
//         } else if (currentsum >= target) {
//             minWindow = Math.min(left - right)
//             currentsum -= nums[right]
//             right++
//             return minWindow
//         }
function minSubArrayLen(target, nums) {
    let left = 0
    let right = 0
    let currentsum = 0
    let minWindow = Infinity;

    while (left < nums.length) {
        currentsum += nums[left]
        
        while (currentsum >= target) {
            currentsum -= nums[right]
            let currentWinow= left - right + 1;
            minWindow = Math.min(currentWinow , minWindow)
            right++ 
        }
        left++
    }
    return (minWindow === Infinity) ? 0 : minWindow
}

const numsArray=[2,3,1,2,4,3]
const target= 7


// console.log(minSubArrayLen(target,numsArray));



// Given an array of integers, write a function that takes the array as argument and returns the first non-repeating number. It should return null if there is no non-repeating number.

function NonRepeating(arr) {
    const hashmap = {}
    let left = 0
    while (left < arr.length) {
        hashmap[arr[left]] = (hashmap[arr[left]] || 0) + 1;
        left++;

    }

    for (const element of arr) {
        if (hashmap[element] === 1) {
            return element;
        }

    }
    
    return null
}

const nums4 = [4,1,2,1,2]

// console.log(NonRepeating(nums4));


// 260. Single Number III
// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space



function NonRepeatingv2(arr) {
    const hashmap = {}
    let result = []
    let left = 0
    while (left < arr.length) {
        hashmap[arr[left]] = (hashmap[arr[left]] || 0) + 1;
        left++;

    }


    for (const element of arr) {
        if (hashmap[element] === 1) {
            // console.log(element);
             result.push(element)
            // return [element];
        }

    }
    
    return result.length === 0 ? null : result
}


const nums5 = [1,2,1,3,2,5,5]

console.log(NonRepeatingv2(nums5));
