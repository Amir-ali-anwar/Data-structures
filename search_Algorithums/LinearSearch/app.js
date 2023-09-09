// Problem- Given an array of 'n' elements and target element 't' find the index of 't' in the array. Return -1 if the target element is not found.

// arr=[-5,2,10,4,6], t=10 -> should return 2 (index)

// arr=[-5,2,10,4,6], t=6 -> should return  4 (index)

// arr=[-5,2,10,4,6], t=20 -> should return  -1 (index)

function linearSearch(arr, n) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === n) {
      return index;
    }
  }
  return -1
}

let arr = [-5, 2, 10, 4, 6];

console.log(linearSearch(arr, 12));


// Big-O=>O(n)
