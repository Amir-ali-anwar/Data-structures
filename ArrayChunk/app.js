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



console.log(ArrayChunk(inputArray, chunkSize));