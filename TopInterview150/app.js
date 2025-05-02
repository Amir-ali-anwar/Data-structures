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

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
