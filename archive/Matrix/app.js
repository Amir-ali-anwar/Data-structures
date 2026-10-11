const matrix = (n) => {
    let count = 1
    let arr=[]
    for (let index = 0; index < n; index++) {
        for (let k = 0; k < n; k++) {
            if(k===0){
                arr[index]=[]
            }
            arr[index][k]=count 
            count++
        }
    }
    return arr
}

console.log(matrix(4));