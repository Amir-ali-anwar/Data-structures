// Maximum Average Subarray I
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

const findMaxAverage = function (nums, k) {
  let maxSum = -Infinity,
    windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  maxSum = windowSum;
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum / k;
};

const _subArray = [1,12,-5,-6,50,3];
const k = 4;
console.log(findMaxAverage(_subArray, k));
