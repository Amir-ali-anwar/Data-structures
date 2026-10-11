const pyramid = (n) => {
    const midPoint = Math.floor((2 * n - 1) / 2);
    console.log(midPoint);
    let result = '';
    for (let row = 0; row < n; row++) {
        let level = ''
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += `${column+1}`;
            } else {
                level += ''
            }
        }
        result += level + '\n';
    }
    return result
}
const n = 4;
console.log(pyramid(n));