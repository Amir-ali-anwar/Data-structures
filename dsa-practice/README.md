# DSA Practice: Fresh Re-solves

A clean place to re-solve problems from scratch. Old solutions live in [`../archive/`](../archive/).
**Don't open them until you've finished (or given up on) a fresh attempt.**

## Workflow

```bash
# 1. Scaffold a problem (number, leetcode slug, pattern folder number or name)
npm run new -- 1 two-sum 01
#    -> dsa-practice/01-arrays-hashing/0001-two-sum.js  (+ a row in PROGRESS.md)

# 2. Solve it. Write the tests first from the examples, then your edge cases.

# 3. Run one problem's tests
node --test dsa-practice/01-arrays-hashing/0001-two-sum.js

# 4. Run everything
npm test
```

Then fill in Time / Result / Redo-on in [PROGRESS.md](PROGRESS.md).

## Interview-style rules

1. **Set a timer.** Easy 15 min, Medium 25 min, Hard 40 min.
2. **Talk it through in the header comment before coding**: clarifying questions, brute force, optimal approach, complexity.
3. **No autocomplete, no AI hints.** Coding interviews often use a plain editor, so practice in plain text sometimes.
4. **Edge cases**: empty input, one element, duplicates, negatives, overflow, already sorted.
5. **Stuck after the timer?** Look at a hint (not the full solution), mark 🟡, and schedule a redo.

## Folder layout (by pattern)

| Folder | Covers |
|---|---|
| `01-arrays-hashing` | Hash maps/sets, prefix sums, counting |
| `02-two-pointers` | Sorted arrays, in-place edits, pair/triple sums |
| `03-sliding-window` | Substrings and subarrays with a constraint |
| `04-stack` | Matching brackets, monotonic stack |
| `05-binary-search` | Sorted search, search on the answer |
| `06-linked-list` | Reversal, fast/slow pointers, merging |
| `07-trees` | DFS/BFS, BST properties, LCA |
| `08-tries` | Prefix search, word dictionaries |
| `09-heap-priority-queue` | Top-K, merge K, running median |
| `10-backtracking` | Subsets, permutations, combinations |
| `11-graphs` | BFS/DFS on grids, topological sort, union-find |
| `12-advanced-graphs` | Dijkstra, MST, Bellman-Ford |
| `13-dynamic-programming-1d` | Climbing stairs, house robber, LIS |
| `14-dynamic-programming-2d` | Grid paths, LCS, edit distance, knapsack |
| `15-greedy` | Jump game, gas station, scheduling |
| `16-intervals` | Merge, insert, meeting rooms |
| `17-math-bit-manipulation` | Number tricks, XOR, bit counting |
| `18-mock-interviews` | Timed 45-min sessions: 2 random problems |

Problem files are named `<4-digit number>-<slug>.js`, e.g. `0003-longest-substring-without-repeating-characters.js`.

## Round 1: problems you've already solved (re-solve blind)

These are in `archive/`. Re-solve each one here without looking, then compare.

| # | Problem | Pattern folder | Old location |
|---|---|---|---|
| 13 | Roman to Integer | 01 | archive/TopInterview150 |
| 169 | Majority Element | 01 | archive/TopInterview150 |
| 189 | Rotate Array | 01 | archive/TopInterview150 |
| 242 | Valid Anagram | 01 | archive/ProblemSolving/temp.js |
| 1929 | Concatenation of Array | 01 | archive/ProblemSolving/temp.js |
| 11 | Container With Most Water | 02 | archive/QuickPreparation |
| 15 | 3Sum | 02 | archive/ProblemSolving |
| 26 | Remove Duplicates from Sorted Array | 02 | archive/TopInterview150 |
| 27 | Remove Element | 02 | archive/TopInterview150 |
| 28 | Find the Index of the First Occurrence in a String | 02 | archive/TopInterview150 |
| 80 | Remove Duplicates from Sorted Array II | 02 | archive/TopInterview150 |
| 88 | Merge Sorted Array | 02 | archive/ProblemSolving |
| 167 | Two Sum II - Input Array Is Sorted | 02 | archive/QuickPreparation |
| 977 | Squares of a Sorted Array | 02 | archive/QuickPreparation |
| 3 | Longest Substring Without Repeating Characters | 03 | archive/QuickPreparation |
| 121 | Best Time to Buy and Sell Stock | 03 | archive/TopInterview150 |
| 209 | Minimum Size Subarray Sum | 03 | archive/ProblemSolving/temp.js |
| 20 | Valid Parentheses | 04 | archive/QuickPreparation |
| 35 | Search Insert Position | 05 | archive/QuickPreparation |
| 69 | Sqrt(x) | 05 | archive/TopInterview150 |
| 367 | Valid Perfect Square | 05 | archive/ProblemSolving |
| 704 | Binary Search | 05 | archive/QuickPreparation |
| 21 | Merge Two Sorted Lists | 06 | archive/QuickPreparation |
| 94 | Binary Tree Inorder Traversal | 07 | archive/QuickPreparation |
| 78 | Subsets | 10 | archive/ProblemSolving |
| 200 | Number of Islands | 11 | archive/ProblemSolving |
| 207 | Course Schedule | 11 | archive/ProblemSolving |
| 70 | Climbing Stairs | 13 | archive/QuickPreparation |
| 118 | Pascal's Triangle | 13 | archive/QuickPreparation |
| 509 | Fibonacci Number | 13 | archive/QuickPreparation |
| 55 | Jump Game | 15 | archive/TopInterview150 |
| 9 | Palindrome Number | 17 | archive/ProblemSolving/temp.js |
| 66 | Plus One | 17 | archive/TopInterview150 |

## Round 2: new problems

Your gaps are mostly in **heaps, tries, intervals, 2D DP, advanced graphs, and Medium/Hard trees**, which come up a lot in coding interviews.
Work through the [NeetCode 150](https://neetcode.io/practice) or [Grind 75](https://www.techinterviewhandbook.org/grind75) in pattern order, and save each one in the matching folder.
