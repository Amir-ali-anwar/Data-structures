const str = 'jadu';

const reverseString=(str)=>{
let reversed= ""
for (let index = str.length-1; index>=0; index --) {
    reversed= reversed + str[index]
}
return reversed
}
// console.log(reverseString(str));

const stringReversal=(str)=>{
   return str.split('').reverse().join('') 
    
}

// console.log(stringReversal(str));

const reverseThree=(str)=>{
    let reversed= ''
    for (const iterator of str) {
        reversed= iterator+reversed
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