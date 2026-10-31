/**
 * 1. Max Consecutive Ones
 * https://leetcode.com/problems/max-consecutive-ones/
 *
 * Pattern:    arrays
 * Difficulty: Easy
 * Date:       2026-10-31
 * Time taken: __ min   (target: Easy 15, Medium 25, Hard 40)
 * Solved without hints? yes / no
 *
 * ---- Problem (paste or summarize) ----
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *   Input: [1,1,0,1,1,1]  ->  Output: 3
 *   Input: [1,0,1,1,0,1]  ->  Output: 2
 * Constraints: 1 <= nums.length <= 10^5, nums[i] is 0 or 1.
 *
 * ---- Clarifying questions I'd ask the interviewer ----
 * - Input size / ranges? Empty input? Duplicates? Negative numbers?
 *
 * ---- Approach ----
 * Brute force:
 * Optimal:
 *
 * Time:  O(?)
 * Space: O(?)
 */

const solve = function (nums) {
  // your code here
  let count = 0
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count ++;
      max= Math.max(max,count)
    } else {
      count=0;
    }
  }
  return max
};




if (typeof module !== "undefined") module.exports = { solve }; // Node only; skipped in the browser

// ---------------- Tests (run: node --test <this file>) ----------------
if (typeof require !== "undefined" && (require.main === module || process.env.NODE_TEST_CONTEXT)) {
  const { test } = require("node:test");
  const assert = require("node:assert/strict");

  test("example 1", () => {
    assert.equal(solve([1, 1, 0, 1, 1, 1]), 3);
  });

  test("example 2", () => {
    assert.equal(solve([1, 0, 1, 1, 0, 1]), 2);
  });

  test("edge case: single element", () => {
    assert.equal(solve([1]), 1);
    assert.equal(solve([0]), 0);
  });

  test("edge case: all ones / all zeros", () => {
    assert.equal(solve([1, 1, 1, 1]), 4);
    assert.equal(solve([0, 0, 0]), 0);
  });

  test("edge case: longest run at the start", () => {
    assert.equal(solve([1, 1, 1, 0, 1]), 3);
  });
}
