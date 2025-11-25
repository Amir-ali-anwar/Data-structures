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


console.log(isPalindrome(x));






