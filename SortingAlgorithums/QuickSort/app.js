function QuickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const pivotIndex = Math.floor(Math.random() * array.length);
  const pivot = array[pivotIndex];
  let left = [];
  let right = [];
  for (let index = 0; index < array.length; index++) {
    if (index === pivotIndex) {
      continue;
    }
    if (array[index] < pivot) {
      left.push(array[index]);
    } else {
      right.push(array[index]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

const arr = [8, 20, -2, 4, -6, 123, 2, 1, 5];
console.log(QuickSort(arr));
