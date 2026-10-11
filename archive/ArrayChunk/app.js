//first solution

function arrayChunk(arrayChunk, chunkSize) {
  let temparray = [];
  for (let index = 0; index < arrayChunk.length; index = index + chunkSize) {
    console.log(index);
    temparray.push(arrayChunk.slice(index, index + chunkSize));
  }
  return temparray;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
console.log(arrayChunk(inputArray, chunkSize));

// 2nd solution

let arrayChunks = (inputArray, chunkSize) => {
  const outputarray = inputArray
    .map((element, index, array) => {
      let subarray = index % chunkSize === 0;
      if (subarray) {
        return array.slice(index, index + chunkSize);
      }
    })
    .filter((array) => array);

  return outputarray;
};
// console.log(arrayChunks(inputArray, chunkSize));

// 3rd Solution

let ChunkArray = (inputArray, chunkSize) => {
  const chunkArray = [];
  let start = 0;
  let index = 1;
  while (inputArray.length) {
    chunkArray.push(inputArray.slice(start, index * chunkSize));
    start = start + index;
    index++;
  }
  return chunkArray;
};

// console.log(ChunkArray(inputArray, chunkSize));

// 3rd Solution

function ArrayChunk(inputArray, chunkSize){
 for (let characters of inputArray) {
  console.log(characters);
  const arr= inputArray[characters]  
  // console.log(arr);
 }

  return inputArray

}



// console.log(ArrayChunk(inputArray, chunkSize));

// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example


// The maximum height candles are  units high. There are  of them, so return .

// Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

// int candles[n]: the candle heights
// Returns

// int: the number of candles that are tallest
// Input Format

// The first line contains a single integer, , the size of .
// The second line contains  space-separated integers, where each integer  describes the height of .

// Constraints

// Sample Input 0

// 4
// 3 2 1 3
// Sample Output 0

// 2
// Explanation 0

// Candle heights are . The tallest candles are  units, and there are  of them


// function birthdayCakeCandles(candles) {
//   if (!candles || candles.length === 0 ) {
//     return 0; // Handle empty array case
// }
//   let largestNumber = candles[0];
//   let largestElements = []
//   for (let i = 0; i < candles.length; i++) {
//     const element = candles[i];
//     if(element<0) throw new Error("Invalid Input: Candle heights cannot be negative")
//     if (element > largestNumber || element === largestNumber) {
//       largestNumber = element
//       largestElements.push(element)
//     }
//   }
//   const largest = largestElements.length
//   return largest

// }

candles=[3,2,1,3]

// const candless = Array.from({ length: 1000000 }, (_, i) => i + 1);
// // Shuffle the array to make sure all elements are distinct
// for (let i = candless.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [candless[i], candless[j]] = [candless[j], candless[i]];
// }


function birthdayCakeCandles(candles) {
  let largestNumber = candles[0];
  let tallestCount = 0; // Count of tallest candles

  for (let i = 0; i < candles.length; i++) {
      const element = candles[i];
      if (element > largestNumber) {
          largestNumber = element;
          tallestCount = 1; // Reset count for new tallest
      } else if (element === largestNumber) {
          tallestCount++; // Increment count for same tallest height
      }
  }

  return tallestCount;
}


// console.log(candless);
console.log(birthdayCakeCandles(candles));