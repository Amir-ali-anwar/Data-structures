// TODO: trace by hand before running. The stack holds INDEXES.
function mystery6(nums: number[]): number[] {
  const result = new Array(nums.length).fill(-1);
  const stack: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      const idx = stack.pop()!;
      result[idx] = nums[i];
    }
    stack.push(i);
  }
  return result;
}
console.log(mystery6([2, 7, 3, 5, 4, 6]));
