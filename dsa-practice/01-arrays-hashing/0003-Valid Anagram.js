// 242. Valid Anagram
// Solved
// Easy
// Topics
// premium lock icon
// Companies
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



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
  let str1 = s.toLowerCase()
  let str2 = t.toLowerCase()
  
  let hashmap={}
  if(str1.length !== str2.length) return false;
  
  for (const element of str1) {
    hashmap[element] = (hashmap[element] || 0)  + 1  
  }
  
  for (const element of str2) {
    if (!hashmap[element]) return false
    hashmap[element] -- 
  }
  return true
};


let s = "anagram";
let t = "nagaram"


console.log(isAnagram(s,t));
