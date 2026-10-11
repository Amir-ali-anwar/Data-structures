/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 *
 * Pattern:    arrays-hashing
 * Difficulty: Easy
 * Date:       2026-10-11
 * Time taken: __ min   (target: Easy 15)
 * Solved without hints? yes / no
 *
 * ---- Problem ----
 * Given an integer array nums, return true if any value appears at least
 * twice in the array, and return false if every element is distinct.
 *
 * Example 1:  nums = [1,2,3,1]                -> true   (1 occurs at indices 0 and 3)
 * Example 2:  nums = [1,2,3,4]                -> false  (all elements are distinct)
 * Example 3:  nums = [1,1,1,3,3,4,3,2,4,2]    -> true
 *
 * Constraints:
 *   1 <= nums.length <= 10^5
 *   -10^9 <= nums[i] <= 10^9
 *
 * ---- Approach ----
 * Brute force: compare every pair -> O(n^2) time, O(1) space.
 * Sort first:  duplicates become neighbours -> O(n log n) time.
 * Optimal:     hash map / Set of values seen so far; return true on the
 *              first value already seen.
 *
 * Time:  O(n)
 * Space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashmap = {}
    for (let i = 0; i < nums.length; i++) {
        if (hashmap[nums[i]]){
            return true
        }
        else{
            hashmap[nums[i]] = 1
        }
    }
    return false
};

module.exports = { containsDuplicate };

// ---------------- Tests (run: node --test <this file>) ----------------
if (require.main === module || process.env.NODE_TEST_CONTEXT) {
  const { test } = require("node:test");
  const assert = require("node:assert/strict");

  test("example 1: duplicate at start and end", () => {
    assert.equal(containsDuplicate([1, 2, 3, 1]), true);
  });

  test("example 2: all distinct", () => {
    assert.equal(containsDuplicate([1, 2, 3, 4]), false);
  });

  test("example 3: many duplicates", () => {
    assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
  });

  test("single element", () => {
    assert.equal(containsDuplicate([7]), false);
  });

  test("duplicate zeros", () => {
    assert.equal(containsDuplicate([0, 5, 0]), true);
  });

  test("negative numbers", () => {
    assert.equal(containsDuplicate([-1, -2, 3, -1]), true);
    assert.equal(containsDuplicate([-1, 1]), false);
  });
}
