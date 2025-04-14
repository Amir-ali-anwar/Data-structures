// Print 1 to N (increasing order)
function printNumbers(n) {
  if (n === 1) {
    console.log(n);
    return n;
  }
  printNumbers(n - 1);
  console.log(n);

  return n;
}

// console.log(printNumbers(5));


// Print 1 to N (decreasing order)
function printNumbersDecreasing(n,isIncreasing=false) {
    if (n === 1) {
      console.log(n);
      return n;
    }
    if (isIncreasing) {
        printNumbers(n - 1, isIncreasing);
        console.log(n);
      } else {
        console.log(n);
        printNumbers(n - 1, isIncreasing); 
      }
  }
  
  console.log(printNumbersDecreasing(5,false));
  