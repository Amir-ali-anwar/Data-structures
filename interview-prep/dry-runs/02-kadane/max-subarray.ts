// Kadane's algorithm: largest sum of a contiguous subarray. Answer: 7 ([3, 4])
function mystery2(nums: number[]): number {
  let best = 0;
  let current = 0;
  for (const n of nums) {
    current = Math.max(n, current + n);
    best = Math.max(best, current);
  }
  return best;
}
console.log(mystery2([2, -5, 3, 4]));
