//Problem statement
//Given an array of integers,sort the array.

function InsertionSort(array) {
  for (let index = 1; index < array.length; index++) {
    let numberToInsert = arr[index];
    let j = index - 1;
    while (j>=0 && array[j] > numberToInsert) {
        arr[j+1]=array[j]
        j=j--
    }
    array[j+1]= numberToInsert
  }
  return array
}

const arr = [8, 20, -2, 4, -6, 123, 2, 1, 5];
// console.log(arr);
console.log(InsertionSort(arr));
