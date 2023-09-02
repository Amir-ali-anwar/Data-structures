// const depthFirstValues = (root) => {
//   if (!root) return [];
//   const result = [];
//   const stack = [root];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//     return result
//   }
//   return result;
// };
// depth values by resursion

const depthFirstValues = (root) => {
  if (!root) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};
