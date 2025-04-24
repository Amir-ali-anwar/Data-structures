// Problem
// Given an array of integers, sort the array

//Solution
// Divide the array into sub arrays, each array contains only one element, as array with one element is considered as sorted.
//Repeatedly merge sub arrays to product the new sorted sub array until there is only sub array remaining , that single array will be sorted

function mergeSort(array) {
  if (array.length < 2) return array;
  let middle = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
function merge(leftArr, rightArr) {
  let sortedarray = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedarray.push(leftArr.shift());
    } else {
      sortedarray.push(rightArr.shift());
    }
  }
  return [...sortedarray,...leftArr,...rightArr]
}
const arr = [8, 20, -2, 4, -6, 123, 2, 1, 5];
console.log(mergeSort(arr));

// Big-O = O(nlogn)
