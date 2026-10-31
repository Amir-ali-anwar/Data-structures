// Longest substring without repeating characters (LeetCode 3). Answer: 3
// Try next: "abba"
function mystery3(s: string): number {
  const seen = new Map<string, number>();
  let left = 0;
  let best = 0;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (seen.has(ch) && seen.get(ch)! >= left) {
      left = seen.get(ch)! + 1;
    }
    seen.set(ch, right);
    best = Math.max(best, right - left + 1);
  }
  return best;
}
console.log(mystery3("abcab"));
