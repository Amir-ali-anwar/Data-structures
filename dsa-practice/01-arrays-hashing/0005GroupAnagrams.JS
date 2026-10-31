// 49. Group Anagrams
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.


// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        let sortedset = str.split("").sort().join("");
        if(!map.has(sortedset)){
            map.set(sortedset,[])
        }
        map.get(sortedset).push(str)

        
    }
    return  Array.from(map.values())
};


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]


console.log(groupAnagrams(strs));



if (typeof module !== "undefined") module.exports = { groupAnagrams }; // Node only; skipped in the browser

// ---------------- Tests (run: node --test <this file>) ----------------
if (typeof require !== "undefined" && (require.main === module || process.env.NODE_TEST_CONTEXT)) {
  const { test } = require("node:test");
  const assert = require("node:assert/strict");

  // Answer may be in any order -> sort words inside each group, then sort the groups.
  const normalize = (groups) =>
    groups
      .map((g) => [...g].sort())
      .sort((a, b) => (JSON.stringify(a) < JSON.stringify(b) ? -1 : 1));

  const assertSameGroups = (actual, expected) =>
    assert.deepEqual(normalize(actual), normalize(expected));

  // Deterministic random generator so failures are reproducible.
  const makeRandom = (seed) => () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const randomWord = (rand, maxLen, alphabet = "abcdefghijklmnopqrstuvwxyz") => {
    const len = Math.floor(rand() * (maxLen + 1));
    let s = "";
    for (let i = 0; i < len; i++) s += alphabet[Math.floor(rand() * alphabet.length)];
    return s;
  };

  // Independent reference: key = letter counts instead of sorted string.
  const reference = (strs) => {
    const map = new Map();
    for (const s of strs) {
      const count = new Array(26).fill(0);
      for (const ch of s) count[ch.charCodeAt(0) - 97]++;
      const key = count.join("#");
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(s);
    }
    return [...map.values()];
  };

  // ---------- Correctness ----------
  test("example 1", () => {
    assertSameGroups(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
      ["bat"],
      ["nat", "tan"],
      ["ate", "eat", "tea"],
    ]);
  });

  test("example 2: single empty string", () => {
    assertSameGroups(groupAnagrams([""]), [[""]]);
  });

  test("example 3: single letter", () => {
    assertSameGroups(groupAnagrams(["a"]), [["a"]]);
  });

  test("multiple empty strings group together", () => {
    assertSameGroups(groupAnagrams(["", "", "a"]), [["", ""], ["a"]]);
  });

  test("no anagrams: every word in its own group", () => {
    assertSameGroups(groupAnagrams(["abc", "def", "ghi"]), [["abc"], ["def"], ["ghi"]]);
  });

  test("all words are anagrams of each other", () => {
    assertSameGroups(groupAnagrams(["abc", "bca", "cab", "acb"]), [["abc", "bca", "cab", "acb"]]);
  });

  test("duplicate words are kept, not removed", () => {
    assertSameGroups(groupAnagrams(["a", "a", "b"]), [["a", "a"], ["b"]]);
  });

  test("same letters but different counts are NOT anagrams", () => {
    assertSameGroups(groupAnagrams(["aab", "abb", "ab"]), [["aab"], ["abb"], ["ab"]]);
  });

  test("words of different lengths never share a group", () => {
    assertSameGroups(groupAnagrams(["a", "aa", "aaa"]), [["a"], ["aa"], ["aaa"]]);
  });

  test("every input word appears exactly once in the output", () => {
    const rand = makeRandom(7);
    const input = Array.from({ length: 500 }, () => randomWord(rand, 6, "abc"));
    const output = groupAnagrams(input).flat();
    assert.deepEqual([...output].sort(), [...input].sort());
  });

  test("matches reference solution on 200 random inputs", () => {
    const rand = makeRandom(42);
    for (let t = 0; t < 200; t++) {
      const n = 1 + Math.floor(rand() * 30);
      // Small alphabet + short words -> lots of anagram collisions.
      const input = Array.from({ length: n }, () => randomWord(rand, 4, "abcd"));
      assertSameGroups(groupAnagrams(input), reference(input));
    }
  });

  // ---------- Time complexity ----------
  // Expected: O(n · k log k) time, n = number of words, k = max word length.
  const timeIt = (fn) => {
    let best = Infinity;
    for (let i = 0; i < 3; i++) {
      const start = performance.now();
      fn();
      best = Math.min(best, performance.now() - start);
    }
    return best;
  };

  test("max constraints (10^4 words × 100 chars) run in under 1 second", () => {
    const rand = makeRandom(1);
    const input = Array.from({ length: 10_000 }, () => {
      let s = "";
      for (let i = 0; i < 100; i++) s += "abcdefghijklmnopqrstuvwxyz"[Math.floor(rand() * 26)];
      return s;
    });
    const ms = timeIt(() => groupAnagrams(input));
    assert.ok(ms < 1000, `took ${ms.toFixed(1)} ms`);
  });

  test("scales linearly in n (8x words -> well under 64x time)", () => {
    const rand = makeRandom(99);
    const big = Array.from({ length: 80_000 }, () => randomWord(rand, 10, "abcde"));
    const small = big.slice(0, 10_000);
    groupAnagrams(small); // warm up the JIT
    const tSmall = timeIt(() => groupAnagrams(small));
    const tBig = timeIt(() => groupAnagrams(big));
    const ratio = tBig / Math.max(tSmall, 0.01);
    // Linear -> ~8x. Quadratic (O(n²)) -> ~64x. Allow plenty of noise.
    assert.ok(ratio < 25, `8x input took ${ratio.toFixed(1)}x longer (small ${tSmall.toFixed(1)} ms, big ${tBig.toFixed(1)} ms)`);
  });
}
