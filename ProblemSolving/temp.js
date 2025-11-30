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
console.log(isAnagram(s,t));


