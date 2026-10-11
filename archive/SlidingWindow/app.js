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

const _subArray = [1, 12, -5, -6, 50, 3];
const k = 4;
// console.log(findMaxAverage(_subArray, k));

// Maximum Sum Subarray of Size K (easy)

// You are given an array of integers nums and an integer k. Your task is to find the maximum sum of any contiguous subarray of size k.]

const maxSumSubarrayOfSizeK = (nums, _kv2) => {
  let maxSum = -Infinity;
  let windowSum = 0;
  for (let i = 0; i < _kv2; i++) {
    windowSum += nums[i];
  }

  maxSum = windowSum;
  for (let i = _kv2; i < nums.length; i++) {
    // windowSum = windowSum + newElement - oldElement
    windowSum = windowSum + nums[i] - nums[i - _kv2];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
};

const _subArrayv2 = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const _kv2 = 3;
console.log(maxSumSubarrayOfSizeK(_subArrayv2, _kv2));

//. Minimum Size Subarray Sum

const smallestSubarrayWithGivenSum = function (nums, target) {
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    console.log(windowEnd);
  }
  if(minLength === Infinity) {
    return 0
  }
};

const _subArrayv3 = [2, 3, 1, 2, 4, 3];
const _target = 7;

console.log(smallestSubarrayWithGivenSum(_subArrayv3, _target));


