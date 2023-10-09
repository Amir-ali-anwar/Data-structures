const matrixMultiplication = (matrixA, matrixB) => {
  let result = []
  let rowsA = matrixA.length;
  let colsA = matrixA[0].length
  let rowsB = matrixB.length;
  let colsB = matrixB[0].length
  console.log(colsA);
  if (colsA !== rowsB) {
    throw new Error("Matrix multiplication not possible: Invalid dimensions.")
  }
  for (let i = 0; i < rowsA; i++) {
    let row = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j]

      }
      row.push(sum)
    }
    result.push(row)
  }
  return result
}

const matrixA = [
  [1, 2],
  [3, 4],
];

const matrixB = [
  [5, 6],
  [7, 8],
];

const result = matrixMultiplication(matrixA, matrixB);

console.log(result);

// Matrix formation

const MatrixFormulation = (array, numRows, numCols) => {
  if (array.length !== numCols * numRows || array.length !== numCols * numRows) {
    throw new Error("Input array size does not match matrix dimensions.")
  }
  let matrix = []
  for (let columns = 0; columns < numCols; columns++) {
    let column = []
    console.log(columns);
    for (let rows = 0; rows < numRows; rows++) {
      column.push(array[rows*numRows+ columns])
    }
    matrix.push(column)
  }
  return matrix
}


// Example usage:
const inputArray = [1, 3, 2, 4, 5, 6];
const numRows = 2;
const numCols = 3;

const matrix = MatrixFormulation(inputArray, numRows, numCols);

console.log(matrix);