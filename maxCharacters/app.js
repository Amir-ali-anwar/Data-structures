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
        console.log(maxval);
        max = obj[key];
        maxChar = key;
    }
  }
  return {
    character: maxChar,
    repeatedValue: max
};
};

