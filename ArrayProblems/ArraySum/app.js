//Given an array of integers, find the sum of all elements.

const arraySum = (inputArray) => {
  let sum = 0
  console.log(sum);
  for (let index = 0; index < inputArray.length; index++) {

    sum += inputArray[index]
  }
  return sum
}


const inputArray = [1, 2, 3, 4, 5, 6, 7];


// console.log(arraySum(inputArray));


// Given an array of integers, find the product of all even elements. If there are no even elements, return 1.


const Input = [1, 3, 3, 7, 5]

const product_of_even_elements = (inputArray) => {
  let product = 1
  for (let index = 0; index < inputArray.length; index++) {
    let isEven = inputArray[index] % 2 === 0
    console.log(isEven);
    if (isEven) {
      product *= inputArray[index]
    }
  }
  return product
}

// console.log(product_of_even_elements(Input));

// Find the maximum element in an array.

const my_array = [3, 8, 1, 6, 2, 8, 5, 12]

const largestElement = (array) => {
  let max_element = array[0]
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element > max_element) {
      max_element = element
    }
  }
  return max_element
}

console.log(largestElement(my_array));

//Find the minimum element in an array.

const my_array1 = [3, 8, 1, 6, 2, 8, 5, 12]

const smallestElement = (array) => {
  let max_element = array[0]
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element < max_element) {
      max_element = element
    }
  }
  return max_element
}

console.log(smallestElement(my_array));

// Find the second largest element in an array
const myArraycheck = [5, 2, 9, 1, 7, 6];

const secondLargestElement = (array) => {
  if (array.length < 2) {
    return "Array should have at least two elements";
  }

  let firstLargest = array[0];
  let secondLargest = Number.NEGATIVE_INFINITY
  // let secondLargest= array[1];

  for (let index = 1; index < array.length; index++) {
    if (array[index] > firstLargest) {
      secondLargest = firstLargest
      firstLargest = array[index]
    } else if (array[index] > secondLargest && array[index] < firstLargest) {
      secondLargest = array[index]
    }

  }
  return secondLargest
}

console.log(secondLargestElement(myArraycheck));


// Reverse the order of elements in an array.
const reverseArray = (array) => {
  let arr = []
  for (let index = array.length - 1; index >= 0; index--) {
    arr.push(array[index])
  }
  return arr
}
console.log(reverseArray(myArraycheck));


// Find and count duplicate elements in an array.

const findDuplicates = (arr) => {
  let tempArray = []
  let duplicatesCount = 0;
  for (let index = 0; index < arr.length; index++) {
    if (!tempArray.includes(arr[index])) {
      tempArray.push(arr[index])
    } else {
      duplicatesCount++
    }
  }
  console.log(duplicatesCount);
  return tempArray
}

const duplicateArray = [1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10]
console.log(findDuplicates(duplicateArray));

const isSorted = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
      console.log("Given array is not sorted");
      return false
    }
  }
  console.log("Given array is sorted");
  return true

}
const myArray = [1, 2, 3, 4, 5];
// console.log(isSorted(myArray));

const sortedArray = [1, 12, 43, 34, 12, 54, 76, 100, 90]
// console.log(isSorted(sortedArray));



//Given a rotated sorted array, find a target element.

const sortedRotatedArray = [1, 2, 3, 4, 5]

const sortedArrayFn = (array, target) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === target) {
      return element
    }
  }
}

console.log(sortedArrayFn(sortedRotatedArray, 4));


// Find the missing number
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing.

const findMissingNumber = async (array) => {
  const arrayLength = array.length;
  const expectedSum = (arrayLength * (arrayLength + 1) / 2)
  const actualSum = array.reduce((sum, num) => sum + num, 0)
  return expectedSum - actualSum
}
const array = [0, 1, 3, 4, 5];
const missingNumber = await findMissingNumber(array)
console.log(missingNumber);


//Given an array nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

const arraynums = [1, 2, 3, 4, 5, 6, 7]
const arrayProduct = (arr) => {
  return arr.reduce((acc, curr, index) => {
    const products = arr.reduce((product, num, i) => (i !== index ? product * num : product), 1)
    acc.push(products)
    return acc
  }, []);
}

console.log(arrayProduct(arraynums));

//  2nd solution

const arrayProducts = (array) => {
  const arrayLength = array.length
  const leftArray = new Array(arrayLength).fill(1)
  const RightArray = new Array(arrayLength).fill(1)
  let leftProduct = 1
  for (let index = 1; index < arrayLength; index++) {
    leftProduct *= array[index - 1]
    leftArray[index] = leftProduct
  }
  let rightProduct = 1;
  for (let i = arrayLength - 2; i >= 0; i--) {
    rightProduct *= array[i + 1];
    RightArray[i] = rightProduct;
  }
  let result = []
  for (let index = 0; index < array.length; index++) {
    // Corrected indexing here (used leftArray and rightArray instead of leftProduct and rightProduct)
    result[index] = RightArray[index] * leftArray[index];
  }
  return result
}
// console.log(arrayProducts(arraynums));


// Given a binary array, find the maximum number of consecutive 1s.
const binaryArray = [1, 1, 0, 1, 1, 1, 0, 0, 0, 1]
const hasConsecutiveOnes = (arr) => {
  let isBinary = false
  for (let index = 0; index < arr.length - 2; index++) {
    const element = arr[index];
    const element1 = arr[index + 1];
    const element2 = arr[index + 2];
    if (element === 1 && element1 === 1 && element2 === 1) {
      return isBinary = true
    }
  }
  return isBinary
}

console.log(hasConsecutiveOnes(binaryArray));


//Given a collection of intervals, merge overlapping intervals.

const intervalArray = [[15, 18], [1, 3], [2, 6], [8, 10]]

const sorting = (intervals) => {
  const n = intervals.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (intervals[j][0] > intervals[j + 1][0]) {
        const temp = intervals[j]
        intervals[j] = intervals[j + 1]
        intervals[j + 1] = temp
      }

    }
  }
  return intervals
}
const mergeOverlappingIntervals = (sortedIntervals) => {
  const n = sortedIntervals.length
  const mergedIntervals = []
  if (n <= 1) {
    return sortedIntervals
  }
  let currentInterval = sortedIntervals[0]
  for (let i = 1; i < n; i++) {
    const nextInterval = sortedIntervals[i]
    if (currentInterval[1] >= nextInterval[0]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      mergedIntervals.push(currentInterval)
      currentInterval = nextInterval
    }

  }
  mergedIntervals.push(currentInterval)
  return mergedIntervals
}
//first solution
const isMerge = (arr) => {
  const sortedIntervals = sorting(arr)
  const mergedIntervals = mergeOverlappingIntervals(sortedIntervals)
  return mergedIntervals
}
console.log(isMerge(intervalArray));

// 2nd solution

const mergingIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])
  const merged = [];
  for (const interval of intervals) {
    if (!merged.length || interval[0] > merged[merged.length - 1][1]) {
      merged.push(interval)
      console.log(merged[merged.length - 1][1]);
      console.log(interval[0]);
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);


    }
  }
  return merged
}
const newIntervals = [[1, 5], [2, 8], [10, 12], [13, 15]];

console.log(mergingIntervals(newIntervals));

// Given an array of integers, find the average of all elements.
const numbers = [1, 2, 3, 4, 5];

const arrayAvg = (nums) => {
  if (nums.length === 0) {
    return 0
  }
  const sumArray = nums.reduce((acc, curr) => acc + curr, 0)
  const average = sumArray / nums.length
  return average
}

console.log(arrayAvg(numbers));

// Rotate the elements of an array to the right by a given number of steps.

const arrayRotaion = (arr) => {
  const arrayLength = arr.length
  for (let i = 0; i < arrayLength - 1; i++) {
    if (arr[arrayLength] > arr[arrayLength + 1]) {
      return false
    }
  }
  return true
}
const myArray1 = [1, 2, 3, 4, 5];

const result1 = arrayRotaion(myArray1)
console.log(result1);


// Check if the elements in an array are sorted in non-decreasing order.

const isNonDecreasing = (arr) => {
  const arrayLength = arr.length
  if (arrayLength === 0) {
    throw new Error("Please input the valid Array")
  }
  for (let i = 0; i < arrayLength - 1; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isNonDecreasing(myArray1));


// convert a number in word form into a numeric value

const wordToNumber = (words) => {
  const wordMap = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  };
  const values = words.map((word) => {
    const lowerCaseWord = word.toLowerCase()
    if (wordMap.hasOwnProperty(lowerCaseWord)) {
      return wordMap[lowerCaseWord]
    } else {
      console.log("your given number not found");
      return NaN
    }
  })
return values
}
const words = ['three', 'five', 'seven'];

console.log(wordToNumber(words));


// Find the intersection or union of two arrays.

const isIntersection = (arr1, arr2) => {
  let array = []
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const element1 = arr2[j];
      if (element === element1) {
        array.push(element)
      }
    }
  }
  return array
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

console.log(isIntersection(array1,array2));

// 2nd method

const findIntersection=(arr1,arr2)=>{
const set= new Set(arr1)
const intersection = [];
  for (const iterator of arr2) {
    if(set.has(iterator)){
      intersection.push(iterator)
    }
  }
  return intersection
}
console.log(findIntersection(array1,array2));

// 3rd Method 

const findInterSectionWithHash = (arr1, arr2) => {
  const hashTable = {}
  for (const iterator of arr1) {
    hashTable[iterator] = true
  }
  const intersection = []
  for (const element of arr2) {
    if (hashTable[element]) {
      intersection.push(element)
    }
  }
  return intersection
}
console.log(findInterSectionWithHash(array1,array2));