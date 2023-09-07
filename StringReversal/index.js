const str = 'jadu';

const reverseString=(str)=>{
let reversed= ""
for (let index = str.length-1; index>=0; index --) {
    reversed= reversed + str[index]
}
return reversed
}
console.log(reverseString(str));
