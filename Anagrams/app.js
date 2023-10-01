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
        obj1[CleanStrB[i]] = 1;
      } else {
        obj2[CleanStrB[i]] += 1;
      }
    }
  }
  const keysA= Object.keys(obj1)
  const keysB= Object.keys(obj2)
  console.log(keysA.length);
  console.log(keysB.length);
  if(keysA.length !== keysB.length ){
    return false
  } 
  return true
};

console.log(anagram("Dormitory", "Dirty Room"));
