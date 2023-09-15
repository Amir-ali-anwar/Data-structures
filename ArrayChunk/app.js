function arrayChunk(arrayChunk, chunkSize) {
    let temparray = []
    for (let index = 0; index < arrayChunk.length; index = index + chunkSize) {
        console.log(index);
        temparray.push(arrayChunk.slice(index, index + chunkSize))
    }
    return temparray
}


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
console.log(arrayChunk(inputArray, chunkSize));

