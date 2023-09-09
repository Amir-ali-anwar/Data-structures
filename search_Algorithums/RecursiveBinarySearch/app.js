// Problem- Given an array of 'n' elements and target element 't' find the index of 't' in the array. Return -1 if the target element is not found.
// main difference between the LinearSearch and Binary search is that binary search only works on the sorted Array whereas Linear search also works on the sorted array
// arr=[-5,2,10,4,6], t=10 -> should return 2 (index)

// arr=[-5,2,10,4,6], t=6 -> should return  4 (index)

// arr=[-5,2,10,4,6], t=20 -> should return  -1 (index)

function RecursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex + 1, rightIndex);
  } else {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
}
let arr = [-5, 2, 10, 4, 6];

console.log(RecursiveBinarySearch(arr, 45));
