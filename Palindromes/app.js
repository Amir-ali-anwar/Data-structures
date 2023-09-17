const palindrome = (str) => {
  if (typeof str === 'string') {
     const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  } else {
    return false;
  }
};

console.log(palindrome("noon"));


