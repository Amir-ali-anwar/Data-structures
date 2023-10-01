// return str.split('')[0].toUpperCase()+ str.slice(1)
const captalizeStr = (str) => {
  return str.split(' ').map((item, _) => {
    return item.charAt(0).toUpperCase() + item.slice(1)
  }).join(' ')
}
const inputStr = "hello world is The most important";
// console.log(captalizeStr(inputStr));

// 2nd solution

const CapitalizedSrt = (str) => {
  let str1 = str[0].toUpperCase()
  for (let index = 1; index < str.length; index++) {
    if (str[index - 1] === ' ') {
      str1 += str[index].toUpperCase()
    } else {
      str1 += str[index]
    }
  }
  return str1 
}

console.log(CapitalizedSrt(inputStr));