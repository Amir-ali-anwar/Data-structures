//Given an array of integers, find the sum of all elements.

const arraySum = (inputArray) => {
  let sum = 0;
  // console.log(sum);
  for (let index = 0; index < inputArray.length; index++) {
    sum += inputArray[index];
  }
  return sum;
};

const inputArray = [1, 2, 3, 4, 5, 6, 7];

// console.log(arraySum(inputArray));

// Given an array of integers, find the product of all even elements. If there are no even elements, return 1.

const Input = [1, 3, 3, 7, 5];

const product_of_even_elements = (inputArray) => {
  let product = 1;
  for (let index = 0; index < inputArray.length; index++) {
    let isEven = inputArray[index] % 2 === 0;
    // console.log(isEven);
    if (isEven) {
      product *= inputArray[index];
    }
  }
  return product;
};

// console.log(product_of_even_elements(Input));

// Find the maximum element in an array.

const my_array = [3, 8, 1, 6, 2, 8, 5, 12];

const largestElement = (array) => {
  let max_element = array[0];
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element > max_element) {
      max_element = element;
    }
  }
  return max_element;
};

console.log(largestElement(my_array));

//Find the minimum element in an array.

const my_array1 = [3, 8, 1, 6, 2, 8, 5, 12];

const smallestElement = (array) => {
  let max_element = array[0];
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element < max_element) {
      max_element = element;
    }
  }
  return max_element;
};

console.log(smallestElement(my_array));

// Find the second largest element in an array
const myArraycheck = [5, 2, 9, 1, 7, 6];

const secondLargestElement = (array) => {
  if (array.length < 2) {
    return "Array should have at least two elements";
  }

  let firstLargest = array[0];
  let secondLargest = Number.NEGATIVE_INFINITY;
  // let secondLargest= array[1];

  for (let index = 1; index < array.length; index++) {
    if (array[index] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = array[index];
    } else if (array[index] > secondLargest && array[index] < firstLargest) {
      secondLargest = array[index];
    }
  }
  return secondLargest;
};

console.log(secondLargestElement(myArraycheck));

// Reverse the order of elements in an array.
const reverseArray = (array) => {
  let arr = [];
  for (let index = array.length - 1; index >= 0; index--) {
    arr.push(array[index]);
  }
  return arr;
};
console.log(reverseArray(myArraycheck));

// Find and count duplicate elements in an array.

const findDuplicates = (arr) => {
  let tempArray = [];
  let duplicatesCount = 0;
  for (let index = 0; index < arr.length; index++) {
    if (!tempArray.includes(arr[index])) {
      tempArray.push(arr[index]);
    } else {
      duplicatesCount++;
    }
  }
  // console.log(duplicatesCount);
  return tempArray;
};

const duplicateArray = [1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10];
console.log(findDuplicates(duplicateArray));

const isSorted = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
      console.log("Given array is not sorted");
      return false;
    }
  }
  console.log("Given array is sorted");
  return true;
};
const myArray = [1, 2, 3, 4, 5];
// console.log(isSorted(myArray));

const sortedArray = [1, 12, 43, 34, 12, 54, 76, 100, 90];
// console.log(isSorted(sortedArray));

//Given a rotated sorted array, find a target element.

const sortedRotatedArray = [1, 2, 3, 4, 5];

const sortedArrayFn = (array, target) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === target) {
      return element;
    }
  }
};

console.log(sortedArrayFn(sortedRotatedArray, 4));

// Find the missing number
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing.

const findMissingNumber = (array) => {
  const arrayLength = array.length;
  const expectedSum = (arrayLength * (arrayLength + 1)) / 2;
  const actualSum = array.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
};
const array = [0, 1, 3, 4, 5];
const missingNumber = findMissingNumber(array);
console.log(missingNumber);

//Given an array nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

const arraynums = [1, 2, 3, 4, 5, 6, 7];
const arrayProduct = (arr) => {
  return arr.reduce((acc, curr, index) => {
    const products = arr.reduce(
      (product, num, i) => (i !== index ? product * num : product),
      1
    );
    acc.push(products);
    return acc;
  }, []);
};

console.log(arrayProduct(arraynums));

//  2nd solution

const arrayProducts = (array) => {
  const arrayLength = array.length;
  const leftArray = new Array(arrayLength).fill(1);
  const RightArray = new Array(arrayLength).fill(1);
  let leftProduct = 1;
  for (let index = 1; index < arrayLength; index++) {
    leftProduct *= array[index - 1];
    leftArray[index] = leftProduct;
  }
  let rightProduct = 1;
  for (let i = arrayLength - 2; i >= 0; i--) {
    rightProduct *= array[i + 1];
    RightArray[i] = rightProduct;
  }
  let result = [];
  for (let index = 0; index < array.length; index++) {
    // Corrected indexing here (used leftArray and rightArray instead of leftProduct and rightProduct)
    result[index] = RightArray[index] * leftArray[index];
  }
  return result;
};
// console.log(arrayProducts(arraynums));

// Given a binary array, find the maximum number of consecutive 1s.
const binaryArray = [1, 1, 0, 1, 1, 1, 0, 0, 0, 1];
const hasConsecutiveOnes = (arr) => {
  let isBinary = false;
  for (let index = 0; index < arr.length - 2; index++) {
    const element = arr[index];
    const element1 = arr[index + 1];
    const element2 = arr[index + 2];
    if (element === 1 && element1 === 1 && element2 === 1) {
      return (isBinary = true);
    }
  }
  return isBinary;
};

console.log(hasConsecutiveOnes(binaryArray));

//Given a collection of intervals, merge overlapping intervals.

const intervalArray = [
  [15, 18],
  [1, 3],
  [2, 6],
  [8, 10],
];

const sorting = (intervals) => {
  const n = intervals.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (intervals[j][0] > intervals[j + 1][0]) {
        const temp = intervals[j];
        intervals[j] = intervals[j + 1];
        intervals[j + 1] = temp;
      }
    }
  }
  return intervals;
};
const mergeOverlappingIntervals = (sortedIntervals) => {
  const n = sortedIntervals.length;
  const mergedIntervals = [];
  if (n <= 1) {
    return sortedIntervals;
  }
  let currentInterval = sortedIntervals[0];
  for (let i = 1; i < n; i++) {
    const nextInterval = sortedIntervals[i];
    if (currentInterval[1] >= nextInterval[0]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      mergedIntervals.push(currentInterval);
      currentInterval = nextInterval;
    }
  }
  mergedIntervals.push(currentInterval);
  return mergedIntervals;
};
//first solution
const isMerge = (arr) => {
  const sortedIntervals = sorting(arr);
  const mergedIntervals = mergeOverlappingIntervals(sortedIntervals);
  return mergedIntervals;
};
console.log(isMerge(intervalArray));

// 2nd solution

const mergingIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const interval of intervals) {
    if (!merged.length || interval[0] > merged[merged.length - 1][1]) {
      merged.push(interval);
      console.log(merged[merged.length - 1][1]);
      console.log(interval[0]);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1]
      );
    }
  }
  return merged;
};
const newIntervals = [
  [1, 5],
  [2, 8],
  [10, 12],
  [13, 15],
];

console.log(mergingIntervals(newIntervals));

// Given an array of integers, find the average of all elements.
const numbers = [1, 2, 3, 4, 5];

const arrayAvg = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  const sumArray = nums.reduce((acc, curr) => acc + curr, 0);
  const average = sumArray / nums.length;
  return average;
};

console.log(arrayAvg(numbers));

// Rotate the elements of an array to the right by a given number of steps.

const arrayRotaion = (arr) => {
  const arrayLength = arr.length;
  for (let i = 0; i < arrayLength - 1; i++) {
    if (arr[arrayLength] > arr[arrayLength + 1]) {
      return false;
    }
  }
  return true;
};
const myArray1 = [1, 2, 3, 4, 5];

const result1 = arrayRotaion(myArray1);
// console.log(result1);

// Check if the elements in an array are sorted in non-decreasing order.

const isNonDecreasing = (arr) => {
  const arrayLength = arr.length;
  if (arrayLength === 0) {
    throw new Error("Please input the valid Array");
  }
  for (let i = 0; i < arrayLength - 1; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};
console.log(isNonDecreasing(myArray1));

// convert a number in word form into a numeric value

const wordToNumber = (words) => {
  const wordMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const values = words.map((word) => {
    const lowerCaseWord = word.toLowerCase();
    if (wordMap.hasOwnProperty(lowerCaseWord)) {
      return wordMap[lowerCaseWord];
    } else {
      console.log("your given number not found");
      return NaN;
    }
  });
  return values;
};
const words = ["three", "five", "seven"];

console.log(wordToNumber(words));

// Find the intersection or union of two arrays.

const isIntersection = (arr1, arr2) => {
  let array = [];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const element1 = arr2[j];
      if (element === element1) {
        array.push(element);
      }
    }
  }
  return array;
};
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

console.log(isIntersection(array1, array2));

// 2nd method

const findIntersection = (arr1, arr2) => {
  const set = new Set(arr1);
  const intersection = [];
  for (const iterator of arr2) {
    if (set.has(iterator)) {
      intersection.push(iterator);
    }
  }
  return intersection;
};
console.log(findIntersection(array1, array2));

// 3rd Method

const findInterSectionWithHash = (arr1, arr2) => {
  const hashTable = {};
  for (const iterator of arr1) {
    hashTable[iterator] = true;
  }
  const intersection = [];
  for (const element of arr2) {
    if (hashTable[element]) {
      intersection.push(element);
    }
  }
  return intersection;
};
console.log(findInterSectionWithHash(array1, array2));

//Write a function called calculateAverageScore that takes an object representing test scores as an argument and returns the average score of the student.

const calculateAverageScore = (testScores) => {
  const testDataArray = Object.entries(testScores)
    .map(([subject, score]) => ({ subject, score }))
    .reduce(
      (acc, curr) => {
        acc.numOfSubjects++;
        acc.totalScore += curr.score;
        acc.Average = acc.totalScore / acc.numOfSubjects;
        return acc;
      },
      { numOfSubjects: 0, totalScore: 0, Average: 0 }
    );

  return testDataArray;
};
const testScores = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};

// console.log(calculateAverageScore(testScores));

const calculateStudentAvg = (testScores) => {
  const testDataArray = Object.values(testScores);
  const totalScore = testDataArray.reduce((acc, curr) => acc + curr, 0);
  const average = totalScore / testDataArray.length;
  return average;
};

// console.log(calculateStudentAvg(testScores));

// Javascript data structure Map
const map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.size);

// Write a function called countCharacters that takes a string as input and returns a Map that contains each character in the string as a key and the count of occurrences of that character as the value.

const countCharacters = (str) => {
  const characterCountMap = new Map();
  for (const char of str) {
    const count = characterCountMap.get(char) || 0;
    characterCountMap.set(char, count + 1);
  }
  return characterCountMap;
};
const text = "hello";
const characterCountMap = countCharacters(text);
console.log(characterCountMap);

//Given an array of integers, find the contiguous subarray (containing at least one number) that has the largest sum and return the sum.
//For example:

//Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//Output: 6 (The contiguous subarray [4, -1, 2, 1] has the largest sum of 6.)

const contiguousArray = (InputArr) => {
  let maxSum = InputArr[0];
  let currentSum = InputArr[0];
  for (let index = 1; index < InputArr.length; index++) {
    currentSum += InputArr[index];
    if (currentSum < InputArr[index]) {
      currentSum = InputArr[index];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};

const InputArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// console.log(contiguousArray(InputArr));

//You're given an array of integers where each integer lies in the range [1, n] inclusive, and n is the size of the array. Some elements in the range [1, n] may appear multiple times, while others may appear only once. Your task is to find all the numbers in the range [1, n] that do not appear in the given array.

//Example:
//Let's say we have an array nums = [4, 3, 2, 7, 8, 2, 3, 1]. Here, n = 8 because the size of the array is 8.

//Expected Output: [5, 6]

//You are required to implement a function generatHash that generates a hash tag from a given input string,
//the hash tag should be considred as follows:

//The input string should be converted to a hash tag format, where each word is captalized and concatenacted together without spaces
//if the length of the input string is greater then 200 characters or if the input string is empty or contains only whitespaces,
//the function should return false

// otherwise, the function should return the generated hash tag prfixed with #.

const generateHash = (str) => {
  if (str.length === 200 || str.trim().length === 0) {
    return false;
  }
  str = str
    .split(" ")
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join("");
  return `#${str}`;
};

//console.log(generateHash("My name is Amir Ali Anwar"));

//
// Generate Pascal's triangle up to a given number of rows.

// Generating Pascal's Triangle up to a given number of rows involves constructing the triangle row by row, following the rule that each number in a row is the sum of the two numbers directly above it in the previous row. Here's a basic idea of how to generate Pascal's Triangle:

//Start with the first row containing only the number 1.
//For each subsequent row:
//a.The row begins and ends with 1.
//b.The numbers in between are obtained by summing the two numbers directly above them in the previous row.
//Continue adding rows until you reach the desired number of rows.
//For example, let's say we want to generate Pascal's Triangle up to 5 rows:

// Row 1: 1
// Row 2: 1 1
// Row 3: 1 2 1
// Row 4: 1 3 3 1
// Row 5: 1 4 6 4 1

// const PascalTriangle=(num_rows)=>{
//   let triangle=[]
//   for (let index = 0; index < num_rows; index++) {
//       if(index===1){
//         arr.push([index])
//       }
//       if(index===2){
//         arr.push([index-1,index-1])
//       }
//       if(index===3){
//         arr.push([index-2,index-1,index-2])
//       }
//       if(index===4){
//         arr.push([index-3,index-1,index-1,index-3])
//       }
//       if(index===5){
//         arr.push([index-4,index-1,index-(-1),index-1,index-4])
//       }
//   }
//   return arr
// }
// const num_rows = 6
// console.log(PascalTriangle(num_rows));

const PascalTriangle = (num_rows) => {
  let triangle = [];
  for (let i = 0; i < num_rows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (i === j || i === 0) {
        row.push(1);
      } else {
        let leftValue = j - 1 >= 0 ? triangle[i - 1][j - 1] : 0;
        let topValue = j < triangle[i - 1].length ? triangle[i - 1][j] : 0;
        row.push(leftValue + topValue);
      }
    }
    triangle.push(row);
  }
  return triangle;
};
const num_rows = 6;
console.log(PascalTriangle(num_rows));

// write a funtion findlongestWord that takes a string as input and returns the longest word in the string
//if there are multiple longest words, return the firs one encountered

// The input string may contain alphatetic characters, digits, spaces and punctuation.
// The input string is non-empty
// The input string may contain multple words separated by spaces

const findlongestWord = (str) => {
  if (!str || str.trim() === 0) {
    throw new Error("please enter the input string");
  }
  const strIntoArray = str.split(" ").sort((a, b) => b.length - a.length);
  return strIntoArray[0];
};

console.log(findlongestWord("I am the besttttttt yahoooooooooooooo "));

// write a function called countChar that takes two paramters: a string and a character to count
// the function should return the number of times the specific character appears in the given string,

// The function should be case-senstive

// The function should handle both cases lowercase and uppercase characters.

// The character paramater can be any printable ASCII character.

const countChar = (str, char) => {
  str = str.toLowerCase();
  char = char.toLowerCase();
  let totalCount = str.split("").reduce((acc, curr) => {
    if (curr === char) {
      acc++;
    }
    return acc;
  }, 0);
  return totalCount;
};

// console.log(countChar('yahoo','i'));

//  Write a function called checkTriangleType that takes three parameters representing the  lengths of the sides of a triangle
// The function should return a string indicating the type of triangle 'equilateral','isosceles' or 'scalene'

const checkTriangleType = (a, b, c) => {
  if (a === null || b == null || c == null)
    throw new Error("Please enter all the values");
  if (a === b && b == c) return "equilateral";
  if (a == b || b == c || a === c) return "isosceles";
  return "scalene";
};

// console.log(checkTriangleType(2,2,2));
// console.log(checkTriangleType(0,0,0));

// Write a function to determine whether a given function is a palindrome or not. A palindrom is a word, phrase, number, or other sequence of characters
// that reads the same forward and backward, ignoring spaces, punctuation and capitalization.

const isPalindrome = (str) => {
  const newstr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return newstr === newstr.split("").reverse().join("");
  // console.log(newstr);
  // return newstr
};

// console.log(isPalindrome('A man, a plan, a canal, Panama!'));

//Write a function findMax that takes and array of numbersas input and returns the maximum number in the array.
const findMax = (arr) => {
  return Math.max(...arr);
};
// console.log(findMax([2,4,5,10,100,300,5000,100]));

const maxFromArray = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  const max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// console.log(findMax([2, 4, 5, 10, 100, 300, 5000, 100]));

const EqualArrays = (arr, arr2) => {
  if (arr.length !== arr2.length) {
    return false;
  }
  return arr.every((currItem, index) => currItem === arr2[index]);
};

// console.log(EqualArrays([1,2,3],[1,2,3]));
// console.log(EqualArrays([],[]));

// write a function that takes a number as a input and returns the sum of its digits

const checkArraySum = (arr) => {
  let result = Array.from(String(arr)).reduce((acc, curr) => {
    acc += Number(curr);
    return acc;
  }, 0);
  return result;
};

// console.log(checkArraySum([123456]));

const checkArraySumV2 = (arr) => {
  let result = arr.reduce((acc, curr) => {
    const digits = String(curr).split("").map(Number);
    console.log(digits);
    return acc;
  }, 0);
  console.log(result);
};
console.log(checkArraySumV2([123456]));

//write a function that takes a string as input and returns the count of the vowels in that string,
// consider 'a', 'e','i','o' and 'u' as vowels (both upppercase and lowercase)

const countVowels = (str) => {
  const strArray = str.toLowerCase().split(""); // Splitting into characters
  const vowelsArray = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  for (let index = 0; index < strArray.length; index++) {
    const element = strArray[index];
    if (vowelsArray.includes(element)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};

console.log(countVowels("Hello world"));

function simpleArraySum(inputString) {
  // Split the string into individual numbers
  const numbers = inputString.split(" ").map(Number);

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Example usage
const inputString = "123410 11";
const result = simpleArraySum(inputString);
console.log(result); // Output: 31

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// Example

// a = [1, 2, 3]
// b = [3, 2, 1]
// For elements *0*, Bob is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

// Function Description

// Complete the function compareTriplets in the editor below.

// compareTriplets has the following parameter(s):

// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating
// Return

// int[2]: Alice's score is in the first position, and Bob's score is in the second.
// Input Format

// The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
// The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

// Constraints

// 1 ≤ a[i] ≤ 100
// 1 ≤ b[i] ≤ 100
// Sample Input 0

// 5 6 7
// 3 6 10
// Sample Output 0

// 1 1
// Explanation 0

// In this example:

// Now, let's compare each individual score:

// , so Alice receives  point.
// , so nobody receives a point.
// , so Bob receives  point.
// Alice's comparison score is , and Bob's comparison score is . Thus, we return the array .

// Sample Input 1

// 17 28 30
// 99 16 8
// Sample Output 1

// 2 1
// Explanation 1

// Comparing the  elements,  so Bob receives a point.
// Comparing the  and  elements,  and  so Alice receives two points.
// The return array is .

const compareTriplets = (a, b) => {
  let aliceScore = 0;
  let bobScore = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    } else {
      return [aliceScore, bobScore];
    }
  }
};

// write down the function to check if arrays are equal element-wise

const areEqual = (a, b) => {
  let result = true;
  a.forEach((x, i) => {
    if (!result) return;
    if (b[i] === undefined || x !== b[i]) return (result = false);
  });
  return result;
};

const smallArray = [2, 3, 500];
const smallArray1 = [2, 3, 500];
const largeArray = Array.from({ length: 501 }, (_, i) => i);
// console.log(areEqual(smallArray,smallArray1));

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .
// Return

// long: the sum of all array elements
// Input Format

// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.

// Output Format

// Return the integer sum of the elements in the array.

// Constraints

// Sample Input

// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output

// 5000000015
// Note:

// The range of the 32-bit integer is .
// When we add several integer values, the resulting sum might exceed the above range. You might need to use long int C/C++/Java to store such sums.

const aVeryBigSum = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const inputSanple = [
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
];

// console.log(aVeryBigSum(inputSanple));

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x
const diagonalDifference = (martix) => {
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  for (let i = 0; i < martix.length; i++) {
    leftDiagonalSum += martix[i][i];
    rightDiagonalSum += matrix[i][martix.length - i - 1];
  }
  return Math.abs(leftDiagonalSum - rightDiagonalSum);
};

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(matrix));

// Write a function that takes an array of numbers as input and returns the minimum value found in the array.

const findMin = (arr) => {
  return Math.min(...arr);
};

// console.log(findMin([4,5,2,3,-6]));

const findMinV2 = (arr) => {
  if (arr.length === 0) return undefined;
  let minNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }
  return minNumber;
};
console.log(findMinV2([4, 5, 2, 3, -6]));

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

// Input Format

// The first line contains an integer, , the size of the array.
// The second line contains  space-separated integers that describe .

// Constraints

// Output Format

// Print the following  lines, each to  decimals:

// proportion of positive values
// proportion of negative values
// proportion of zeros
// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
// Sample Output

// 0.500000
// 0.333333
// 0.166667
// Explanation

// There are  positive numbers,  negative numbers, and  zero in the array.
// The proportions of occurrence are positive: , negative:  and zeros: .

function plusMinus(arr) {
  const n = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  arr.forEach((num) => {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  });

  const positiveRatio = positiveCount / n;
  const negativeRatio = negativeCount / n;
  const zeroRatio = zeroCount / n;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

const newarray = [1, 1, 0, -1, -1];

// console.log(plusMinus(newarray));

// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

// Input Format

// A single integer, , denoting the size of the staircase.

// Constraints

//  .

// Output Format

// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

// Sample Input

// 6
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .

const staircase = (n) => {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " ".repeat(n - i);
      // Append '#' symbols for the staircase
      row += "#".repeat(i);
      row += "#";
    }
    result += row + "\n";
  }
  return result;
};

// console.log(staircase(6));

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints

// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is

function miniMaxSum(arr) {
  // Write your code here
  let arraysum = 0;
  let sumArray = [];
  let minNumber;
  let maxNumber;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    console.log(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j]);
      if (arr[i] !== arr[j]) {
        console.log(arr[j]);
        sum += arr[j];
      }
    }
    // sumArray.push(sum)

    arraysum += sum;
    sumArray.push(arraysum);
    console.log(sumArray);
    maxNumber = sumArray[0];
  }
  for (let i = 1; i < sumArray.length; i++) {
    if (sumArray[i] > maxNumber) {
      maxNumber = sumArray[i];
    }
  }
  // Find the minimum sum
  minNumber = sumArray[0];
  for (let i = 1; i < sumArray.length; i++) {
    if (sumArray[i] < minNumber) {
      minNumber = sumArray[i];
    }
  }
  console.log("Minimum sum:", minNumber);
  console.log("Maximum sum:", maxNumber);
  return arraysum;
}
arr = [1, 2, 3, 4, 5];

console.log(miniMaxSum(arr));

//

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {
  // Extract hour, minute, second, and period (AM/PM) from the input string
  var [hour, minute, second, period] = s.split(/:|([AP]M)/g).filter(Boolean);

  // Convert hour to integer
  hour = parseInt(hour, 10);

  // If period is PM and hour is not 12, add 12 to hour
  if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  // If period is AM and hour is 12, set hour to 0
  if (period === "AM" && hour === 12) {
    hour = 0;
  }

  // Format hour, minute, and second to have leading zeros
  hour = hour.toString().padStart(2, "0");
  minute = minute.padStart(2, "0");
  second = second.padStart(2, "0");

  // Return the time in 24-hour format
  return `${hour}:${minute}:${second}`;
}

// Sample Input
var s = "07:05:45PM";

// Output
console.log(timeConversion(s)); // Output: 19:05:45

// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// Examples

//  round to  (85 - 84 is less than 3)
//  do not round (result is less than 40)
//  do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// Function Description

// Complete the function gradingStudents in the editor below.

// gradingStudents has the following parameter(s):

// int grades[n]: the grades before rounding
// Returns

// int[n]: the grades after rounding as appropriate
// Input Format

// The first line contains a single integer, , the number of students.
// Each line  of the  subsequent lines contains a single integer, .

// Constraints

// Sample Input 0

// 4
// 73
// 67
// 38
// 33
// Sample Output 0

// 75
// 67
// 40
// 33
// Explanation 0

// image

// Student  received a , and the next multiple of  from  is . Since , the student's grade is rounded to .
// Student  received a , and the next multiple of  from  is . Since , the grade will not be modified and the student's final grade is .
// Student  received a , and the next multiple of  from  is . Since , the student's grade will be rounded to .
// Student  received a grade below , so the grade will not be modified and the student's final grade is .

const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  const finalgrades = [];
  for (let i = 0; i < grades.length; i++) {
    const number = grades[i];
    const nextMultiple = nextMultipleOf5(number);
    if (nextMultiple - number < 3 && number >= 38) {
      finalgrades.push(nextMultiple);
    } else {
      finalgrades.push(number);
    }
  }
  return finalgrades;
}
console.log(gradingStudents(grades));

function nextMultipleOf5(number) {
  return Math.ceil(number / 5) * 5;
}

// write a function to check if a character is uppercase or lowercase

const isUpperCase = (char) => {
  if (char.charCodeAt(0) > 65 && char.charCodeAt(0) < 90) {
    return true;
  }
  return false;
};

// console.log(isUpperCase("DATA"));

// write a Javascript function to reverse a string without using any built-in methods or library.The function should take a

//string as input and return the reversed string.

const reverseString = (str) => {
  let strIntoArray = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    strIntoArray += element;
  }
  return strIntoArray;
};
console.log(reverseString("hello"));

// write a function called repeatString that takes two parameters

// a string that needs to be repeated
// An integer respresenting the number of times the string should be repeated
// The function should repeat the input string str the specified number of times and return restuling string

function repeatString(str, num) {
  if (num === 0) return str;
  return str.repeat(num);
}

console.log(repeatString("abc", 0));

// write a function called truncateString that takes two paramterss

// A string that needs to be truncated
// maxlength: An integer representing the maximum length of the string
// The function should truncate the input string str if its length exceeds the specified maxlenth,if the truncation occurs
// the function should add '...' to the end of the truncated string.

function truncateString(str, maxLength) {
  if (maxLength == 0 || maxLength < 0) return str;
  return str.slice(0, maxLength).concat("...");
}
const Max_length = 30;
console.log(
  truncateString("This is a string with special characters: *&^%$", Max_length)
);

// Write a function called simplePasswordValidator that takes a single parameter

// password:A string representing the password to be validated
// The function should validate the password based on the following criteria
// The passsword must contain at least one lowercase letter, one uppercase letter, and one digit
// The function should return true if the password meets all the criteria, otherwise, it should return fasle

// input
// password: A non-empty string representing the password to be validated

//output

// true/ if the password meets all the criteria

// false otherwise

// contraints

// The input string password will contain only alphanumeric characters and puncutation marks
function simplePasswordValidator(pwd) {
  if (pwd.length < 8)
    throw new Error("Password length must be at least 8 characters");

  let hasLowercase = false;
  let hasUppercase = false;
  let hasDigit = false;

  for (let char of pwd) {
    if (/[a-z]/.test(char)) hasLowercase = true;
    else if (/[A-Z]/.test(char)) hasUppercase = true;
    else if (/[0-9]/.test(char)) hasDigit = true;
  }

  return hasLowercase && hasUppercase && hasDigit;
}

// console.log(simplePasswordValidator("1231313REWQWqwqqwqwq")); // true
// console.log(simplePasswordValidator("1231313afdasfsA")); // false
// console.log(simplePasswordValidator("1231313afdasfs@")); // false

// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

// In the diagram below:

// The red region denotes the house, where  is the start point, and  is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .
// When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. *A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right. *
// Apple and orange(2).png

// Given the value of  for  apples and  oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range )?

// For example, Sam's house is between  and . The apple tree is located at  and the orange at . There are  apples and  oranges. Apples are thrown  units distance from , and  units distance. Adding each apple distance to the position of the tree, they land at . Oranges land at . One apple and two oranges land in the inclusive range  so we print

// 1
// 2
// Function Description

// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.
// Input Format

// The first line contains two space-separated integers denoting the respective values of  and .
// The second line contains two space-separated integers denoting the respective values of  and .
// The third line contains two space-separated integers denoting the respective values of  and .
// The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point .
// The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point .

// Constraints

// Output Format

// Print two integers on two different lines:

// The first integer: the number of apples that fall on Sam's house.
// The second integer: the number of oranges that fall on Sam's house.
// Sample Input 0

// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6
// Sample Output 0

// 1
// 1
// Explanation 0

// The first apple falls at position .
// The second apple falls at position .
// The third apple falls at position .
// The first orange falls at position .
// The second orange falls at position .
// Only one fruit (the second apple) falls within the region between  and , so we print  as our first line of output.
// Only the second orange falls within the region between  and , so we print  as our second line of output.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  // console.log({ s });
  // console.log({ t });
  // console.log({ a });
  // console.log({ b });
  // console.log({ apples });
  // console.log({ oranges });
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    const appleLanding = apples[i] + a;
    if (s <= appleLanding && appleLanding <= t) {
      appleCount++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    const orangesLanding = oranges[i] + b;
    if (s <= orangesLanding && orangesLanding <= t) {
      orangeCount++;
    }
  }
  // console.log(appleCount);
  // console.log(orangeCount);
  return [appleCount, orangeCount];
}

const ss = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];
// Call countApplesAndOranges function with extracted values
console.log(countApplesAndOranges(ss, t, a, b, apples, oranges));

// create a function generateBarChart that takes an array of numbers and generates a simple text-based bar chart.

function generateBarChart(arr) {
  arr.forEach((item) => {
    // console.log("*".repeat(item)); // Generate and print a string of asterisks
  });
}

generateBarChart([5, 3, 9, 2]);

function generateBarChartV2(arr) {
  return arr.map((curr, index) => {
    return `${index + 1}: ${"*".repeat(curr)}`;
  });
}

generateBarChartV2([5, 3, 9, 2]);

// console.log(generateBarChartV2([5, 3, 9, 2]));

// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// Example

// After one jump, they are both at , (, ), so the answer is YES.

// Function Description

// Complete the function kangaroo in the editor below.

// kangaroo has the following parameter(s):

// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2
// Returns

// string: either YES or NO
// Input Format

// A single line of four space-separated integers denoting the respective values of , , , and .

// Constraints

// Sample Input 0

// 0 3 4 2
// Sample Output 0

// YES
// Explanation 0

// The two kangaroos jump through the following sequence of locations:

// image

// From the image, it is clear that the kangaroos meet at the same location (number  on the number line) after same number of jumps ( jumps), and we print YES.

// Sample Input 1

// 0 2 5 3
// Sample Output 1

// NO
// Explanation 1

// The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., ). Because the second kangaroo moves at a faster rate (meaning ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.

function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    return x1 === x2 ? "YES" : "NO";
  } else {
    let n = (x2 - x1) / (v1 - v2);
    return Number.isInteger(n) && n >= 0 ? "YES" : "NO";
  }
  // Write your code here
}

const x1 = 0;
const v1 = 2;
const x2 = 5;
const v2 = 3;
// console.log(kangaroo(x1,v1,x2,v2));

// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

//Example

//a=[2,6]
//b=[24,36]

// There are two numbers between the arrays: 6  and 12 .

// 6 % 2 == 0 (true)

// 6 % 6 == 0 (true)

// 24 % 6 == 0 (true)

// 36 % 6 == 0 (true)
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}
function getTotalX(a, b) {
  const LcmValue = lcmList(a);
  const GcdValue = gcdList(b);
  let count = 0;
  for (let x = LcmValue; x <= GcdValue; x += LcmValue) {
    console.log(x);
    if (GcdValue % x === 0) {
      count++;
    }
  }
  return count;
}
function lcmList(arr) {
  return arr.reduce((acc, val) => lcm(acc, val), 1);
}
function gcdList(arr) {
  return arr.reduce((acc, val) => gcd(acc, val));
}
function gcd(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

const arra = [2, 4];
const arrb = [16, 32, 96];

// console.log(getTotalX(arra,arrb));

// Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .

// Example

// Three pairs meet the criteria:  and .

// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

// Input Format

// The first line contains  space-separated integers,  and .
// The second line contains  space-separated integers, each a value of .

// Constraints

// Sample Input

// STDIN           Function
// -----           --------
// 6 3             n = 6, k = 3
// 1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
// Sample Output

//  5
// Explanation

// Here are the  valid pairs when  k=3

// (0,2)->ar[0]+ar[2]=1+2=3
// (0,5)->ar[0]+ar[2]=1+2=3

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      let pairsSum = ar[i] + ar[j];
     if (pairsSum % k === 0) {
        count++;
      }
    }
  }
  return count;
}


const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];

// console.log(divisibleSumPairs(n, k, ar));  // Output: 5



// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// Example
// scores= [12,24,10,24]

// Scores are in the same order as the games played. She tabulates her results as follows:

// Count
// Game  Score  Minimum  Maximum   Min Max
//  0      12     12       12       0   0
//  1      24     12       24       0   1
//  2      10     10       24       1   1
//  3      24     10       24       1   1


// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

// Function Description

// Complete the breakingRecords function in the editor below.

// breakingRecords has the following parameter(s):

// int scores[n]: points scored per game
// Returns

// int[2]: An array with the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.
// Input Format

// The first line contains an integer , the number of games.
// The second line contains  space-separated integers describing the respective values of .

// Constraints

// Sample Input 0

// 9
// 10 5 20 20 4 5 2 25 1
// Sample Output 0

// 2 4
function breakingRecords(scores) {
  let minScore = scores[0];
  let maxScore = scores[0];
  let minCount = 0;
  let maxCount = 0;
  for (let i = 0; i < scores.length; i++) {
    // console.log(scores[i] > maxScore);
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      maxCount++;
    } else if (scores[i] < minScore) {
      minScore = scores[i];
      minCount++;
    }
  }
return [maxCount,minCount]
}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
// console.log(breakingRecords(scores)); // Output: [2, 4]



// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.



function twoSum(nums, target) {
  let result = [];
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement= target-nums[i]
    if(numMap.has(complement)){
      return [numMap.get(complement),i]
    }
    numMap.set(nums[i],i)
  }
  return [];
}


let nums = [2, 7, 11, 15];
let target = 9;

let nums1 = [3,2,3];
let target1 = 6;
// console.log(twoSum(nums1, target1));


// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


const addTwoNumbers = (l1, l2) => {
  let arraySum = [];
  let carry = 0;
  let maxLength = Math.max(l1.length, l2.length);
  for (let i = 0; i < maxLength; i++) {
    let digit = i < l1.length ? l1[i] : 0;
    let digit2 = i < l2.length ? l2[i] : 0;
    let arraysSum = digit + digit2;
    carry = Math.floor(arraysSum / 10);
    arraySum.push(arraysSum % 10);
  }
  if(carry>0){
    arraySum.push(carry)
  }
  return arraySum;
};

const l1 = [1, 2, 3]; 
const l2 = [4, 5, 6];

const l3 = [2, 5]; 
const l4 = [5, 5, 4];
// console.log(addTwoNumbers(l3,l4));



// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14



function miniMaxSum1(array) {
  // Write your code here
  let minNumber = Infinity;
  let maxNumber = -Infinity;
  let totalSum = 0;

  // Calculate the sum of all elements
  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
    for (let i = 0; i < array.length; i++) {
      let currentSum = totalSum - array[i]; ;
      if (currentSum > maxNumber) {
        maxNumber = currentSum;
      }
      if (currentSum < minNumber) {
        minNumber = currentSum;
      }
      
    }
    return [minNumber, maxNumber];  // Return the sums if needed

  
}


arr = [1, 2, 3, 4, 5];

console.log(miniMaxSum1(arr));