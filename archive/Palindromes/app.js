const palindrome = (str) => {
  if (typeof str === 'string') {
     const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  } else {
    return false;
  }
};

console.log(palindrome("noon"));

// palindrome check

const palindrome1=(str)=>{
  if(typeof str ==='string'){
    return str === str.split('').reverse().join('')
  }else{
    return false
  }
}
console.log(palindrome1('noonm'));


