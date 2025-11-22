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
