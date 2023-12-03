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

// console.log(product_of_even_elements(Input));

// Find the maximum element in an array.

const my_array = [3, 8, 1, 6, 2, 8, 5,12]

const largestElement=(array)=>{
  let max_element= array[0]
  for (let index =1; index < array.length; index++) {
    const element = array[index];
    if(element>max_element){
      max_element= element
    }
  }
  return max_element
}

console.log(largestElement(my_array));

//Find the minimum element in an array.

const my_array1 = [3, 8, 1, 6, 2, 8, 5,12]

const smallestElement=(array)=>{
  let max_element= array[0]
  for (let index =1; index < array.length; index++) {
    const element = array[index];
    if(element<max_element){
      max_element= element
    }
  }
  return max_element
}

console.log(smallestElement(my_array));

// Find the second largest element in an array
const myArraycheck = [5, 2, 9, 1, 7, 6];

const secondLargestElement = (array) => {
  if (array.length < 2) {
    return "Array should have at least two elements";
  }

  let firstLargest = array[0];
  let secondLargest = Number.NEGATIVE_INFINITY
  // let secondLargest= array[1];

  for (let index = 1; index < array.length; index++) {
    if (array[index] > firstLargest) {
      secondLargest = firstLargest
      firstLargest = array[index]
    } else if (array[index] > secondLargest && array[index] < firstLargest) {
      secondLargest=array[index]
    }

  }
  return secondLargest
}

console.log(secondLargestElement(myArraycheck));