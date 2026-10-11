function bubbleSort(arr) {
  let swapped;
  do {
    swapped=false
    for (let index = 0; index < arr.length-1; index++) {
      if (arr[index] > arr[index + 1]) {
        let temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped=true
    }
    }
  } while (swapped);
  return arr
}
const arr = [8, 20, -2, 4, -6,123,2,1,5];
// console.log(arr);
console.log(bubbleSort(arr));
