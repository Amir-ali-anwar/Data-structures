//Given an array of integers, find the sum of all elements.

const arraySum = (inputArray) => {
  let sum = 0
  console.log(sum);
  for (let index = 0; index < inputArray.length; index++) {

    sum += inputArray[index]
  }
  return sum
}


const inputArray = [1, 2, 3, 4, 5, 6, 7];


// console.log(arraySum(inputArray));


// Given an array of integers, find the product of all even elements. If there are no even elements, return 1.


const Input= [1, 3, 3, 7, 5]

const  product_of_even_elements=(inputArray)=>{
  let product=1
  for (let index = 0; index < inputArray.length; index++) {
    let isEven= inputArray[index] %2 === 0
    console.log(isEven);
    if (isEven) {
      product *= inputArray[index]
    }
  }
  return product
}

console.log(product_of_even_elements(Input));
