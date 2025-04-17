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
function printNumbersDecreasing(n, isIncreasing = false) {
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

// console.log(printNumbersDecreasing(5, false));

// Print sum of first N natural numbers using recursion

function PrintSum(n) {
  if (n === 1 || n === 0 || n < 1) {
    // console.log(n);
    return Math.abs(n);
  }
//   if (n === 0) return n;
  return PrintSum(n - 1) + n;
}

console.log(PrintSum(12));


function PrintSumV2(n) {
    return (n * (n + 1)) / 2;
  }

console.log(PrintSumV2(1222222));


//Check if a number is a palindrome using recursion.


const palidromRecursive = (num) => {
  const string = num.toString();
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return false
    }
    left++
    right--
  }
  return true;
};

console.log(palidromRecursive(121));
