// 169. Majority Element
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
// The input is generated such that a majority element will exist in the array.
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashmap = {}
    const totalCounts = Math.floor(nums.length / 2);

    console.log(totalCounts);
    
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        hashmap[element] = (hashmap[element] || 0)  + 1 
        
        if(hashmap[element]> totalCounts){
            return nums[index]
        }

    }
  
    
  
};


let nums =[2,2,1,1,1,2,2]


console.log(majorityElement(nums));

module.exports = { majorityElement };

// ---------------- Tests (run: node --test <this file>) ----------------
if (require.main === module || process.env.NODE_TEST_CONTEXT) {
  const { test } = require("node:test");
  const assert = require("node:assert/strict");

  test("example 1", () => {
    assert.equal(majorityElement([3, 2, 3]), 3);
  });

  test("example 2", () => {
    assert.equal(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
  });

  test("single element", () => {
    assert.equal(majorityElement([5]), 5);
  });

  test("all the same", () => {
    assert.equal(majorityElement([4, 4, 4, 4]), 4);
  });

  test("majority appears last", () => {
    assert.equal(majorityElement([1, 2, 3, 3, 3]), 3);
  });

  test("negative numbers", () => {
    assert.equal(majorityElement([-1, -1, 2]), -1);
  });
}
