const anagram = (strA, strB) => {
  const CleanStrA = strA.replace(/[^\w]/g, "").toLowerCase();
  const CleanStrB = strB.replace(/[^\w]/g, "").toLowerCase();
  if (CleanStrA.length !== CleanStrB.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (const i in CleanStrA) {
    if (!obj1[CleanStrA[i]]) {
      obj1[CleanStrA[i]] = 1;
    } else {
      obj1[CleanStrA[i]] += 1;
    }
    for (const i in CleanStrB) {
      if (!obj2[CleanStrB[i]]) {
        obj2[CleanStrB[i]] = 1;
      } else {
        obj2[CleanStrB[i]] += 1;
      }
    }
  }
  const keysA = Object.keys(obj1)
  const keysB = Object.keys(obj2)
  console.log(keysA.length);
  console.log(keysB.length);
  if (keysA.length !== keysB.length) {
    return false
  }
  return true
};

console.log(anagram("Dormitory", "Dirty Room"));


// solution 2

const Anagram = (strA, strB) => {
  const char1= characterMap(strA)
  const char2= characterMap(strB)
  if (Object.keys(char1).length !== Object.keys(char2).length) {
    return false
  }
  for (const key in char1) {
    if(char1[key] !== char2[key]){
      return false
    }
  }
  return true
}

const characterMap = (str) => {
  const obj = {}
  for (let index of str.replace(/[^\w]/g, "").toLowerCase()) {
    obj[index] = obj[index] + 1 || 1
  }
  return obj
}
console.log(Anagram("listen", "silent"));