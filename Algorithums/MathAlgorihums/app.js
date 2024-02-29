function fibonacci(n) {
    const fib = [0, 1]
    for (let index =2; index < n; index++) {
        console.log(index);
        fib[index] = fib[index - 1] + fib[index - 2]
        console.log(fib[index]);

    }
    return fib
}

console.log(fibonacci(3))
console.log(fibonacci(5))

//Time complity

// Big-o = o(n)