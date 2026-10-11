const FizzBuzz = (number) => {
  let output = "";
  if (number % 3 === 0) {
    output += "Fizz";
  }
  if (number % 5 === 0) {
    output += "Buzz";
  }
  if (number % 3 === 0 && number % 5 === 0) {
    output += "FizzBuzz";
  }
  return output;
};

console.log(FizzBuzz(785));
