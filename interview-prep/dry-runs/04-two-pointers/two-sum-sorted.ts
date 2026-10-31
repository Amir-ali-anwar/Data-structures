// Two numbers in a SORTED array that add to target. O(n) time, O(1) space.
// target 10 -> [0, 4]   target 13 -> [2, 4]
function mystery4(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [];
}
console.log(mystery4([1, 3, 4, 6, 9], 10));
console.log(mystery4([1, 3, 4, 6, 9], 13));
