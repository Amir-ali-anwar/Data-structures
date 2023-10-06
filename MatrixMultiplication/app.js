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
                sum+=matrixA[i][k]*matrixB[k][j]
                
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

