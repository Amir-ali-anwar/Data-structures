// Find the most repeated character from the string

const maxCharacters = (str) => {
  let obj = {};
  for (let char of str) {
    if (typeof obj[char] !== "undefined") {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }
  let maxchar = "";
  let maxval = 0;
  for (const key in obj) {
    if (obj[key] > maxval) {
      max = obj[key];
      maxChar = key;
    }
  }
  return {
    character: maxChar,
    repeatedValue: max,
  };
};
console.log(maxCharacters("amiralianwar"));

// Same task with javaScript reduce

const maxChars = (str) => {
  const charCount = str.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let maxChar = '';
  let max = 0;

  for (let char in charCount) {
      if (charCount[char] > max) {
          max = charCount[char];
          maxChar = char;
      }
  }

  return {
      character: maxChar,
      repeatedValue: max
  };

};

console.log(maxChars("amir"));
