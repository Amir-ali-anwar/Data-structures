const str = 'jadu';

const reverseString = (str) => {
  let reversed = ""
  for (let index = str.length - 1; index >= 0; index--) {
    reversed = reversed + str[index]
  }
  return reversed
}
// console.log(reverseString(str));

const stringReversal = (str) => {
  return str.split('').reverse().join('')

}

// console.log(stringReversal(str));

const reverseThree = (str) => {
  let reversed = ''
  for (const iterator of str) {
    reversed = iterator + reversed
    console.log(reversed);
  }
  console.log(reversed);
}


// reverseThree(str)

const reverseByReduce = (str) => {
  return (reversed = str.split("").reduce((acc, curr) => {
    return (curr += acc);
  }, ""));
};

console.log(reverseByReduce(str))




// Strings reversal revision

const strr = 'test';

// method-1

const strReverse = (str) => {
  let reversed = '';
  for (let index = str.length - 1; index >= 0; index--) {
    reversed = reversed + str[index];
  }
  return reversed
}

console.log(strReverse(strr));


// method-2

const strReverse2=(str)=>{
  return str.split('').reduce((acc,curr)=>{
    return curr + acc
  },'')
}
console.log(strReverse2(strr));

// substring array methods

let substr = "Hello, World!";
// Note:

// If the start index is greater than the end index, substring will swap them.
let result= substr.substring(7,2)
console.log(result);

// we can not pass the negative values to the substring, negative values converts into the 0 in substring method.
// and note that end is excluded 

let results = substr.substring(-3, 5);
console.log(results); 

// Method-3
const strReverse3 = (str) => {
  console.log(str);
  let reversed = ''
  for (const key in str) {
     reversed = str[key] + reversed  ;
  }
  return reversed
}

console.log(strReverse3(strr));

// Method-4
const strReverse4=(str)=>{
  debugger
  console.log(str);
return str.split('').reverse().join('')
}
console.log(strReverse4(strr));