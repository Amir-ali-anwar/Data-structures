/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * Pattern:    arrays-hashing
 * Difficulty: Easy | Medium | Hard
 * Date:       2026-10-11
 * Time taken: __ min   (target: Easy 15, Medium 25, Hard 40)
 * Solved without hints? yes / no
 *
 * ---- Problem (paste or summarize) ----
 *
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

const solve = function (nums, target) {
  // your code here
   const prevMap = {}
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const diff = target - element
        if (diff  in prevMap){
            return [prevMap[diff],i]
        }
        else{
            prevMap[nums[i]] = i 
        }
                
    }
};

module.exports = { solve };

// ---------------- Tests (run: node --test <this file>) ----------------
if (require.main === module || process.env.NODE_TEST_CONTEXT) {
  const { test } = require("node:test");
  const assert = require("node:assert/strict");

  test("example 1", () => {
    assert.deepEqual(solve([2, 7, 11, 15], 9), [0, 1]);
  });

  test("example 2", () => {
    assert.deepEqual(solve([3, 2, 4], 6), [1, 2]);
  });

  test("duplicates", () => {
    assert.deepEqual(solve([3, 3], 6), [0, 1]);
  });

  test("negative numbers", () => {
    assert.deepEqual(solve([-1, -2, -3, -4, -5], -8), [2, 4]);
  });

  test("answer at the end of the array", () => {
    assert.deepEqual(solve([1, 5, 9, 14, 20], 34), [3, 4]);
  });
}
