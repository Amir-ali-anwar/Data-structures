// Adds up the even numbers. Answer: 14
function mystery(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) result += nums[i];
  }
  return result;
}
console.log(mystery([3, 4, 7, 10]));
