// return str.split('')[0].toUpperCase()+ str.slice(1)
const captalizeStr = (str) => {
    return str.split(' ').map((item, _) => {
        return item.charAt(0).toUpperCase()+ item.slice(1)
    }).join(' ')
}
const inputStr = "hello world";
console.log(captalizeStr(inputStr));