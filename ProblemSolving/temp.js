// Longest Substring Without Repeating Characters


function lengthOfLongestSubstring(s) {
    let left = 0
    let right = 0;
    let maxLength = 0
    let hashmap = {}
    while (left < right) {
        if (!hashmap) {
            hashmap[s[left]]= s[left]
        }
    }
    console.log(hashmap);
    

};



let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));