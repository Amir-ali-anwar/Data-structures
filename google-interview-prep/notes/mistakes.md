# Mistakes to watch for

- `Math.max(a, b)` picks the bigger one. It does not add them.
- Pointers and stacks often hold INDEXES, not values. Write the array with
  indexes underneath before tracing, and always look up `nums[i]`.
- Last index is `length - 1`, not `length`.
- `return` ends the function immediately. No more loop iterations.
- Boundary checks: `<` vs `<=` must match everywhere they describe the same rule.
- `shift()` is O(n), not O(1) or O(n log n).
- Sort comparator `a - b` is ascending, `b - a` is descending.
