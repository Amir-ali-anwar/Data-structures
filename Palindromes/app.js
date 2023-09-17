const palindrome = str => {
    if (typeof str === String) {
      return str === reverse(str);
    } else {
      return false;
    }
  };
  
  palindrome('noon'); // true
  palindrome('asdf'); // false
  