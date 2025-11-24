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

console.log(longestCommonPrefix(strs))
