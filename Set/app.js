// Set the default data structure provided by the javascript, Set contains the unique values, set does not maintain
// the insertion order whereas the arrays maintain the insertion order


const set = new Set([1,2,3,4,5,6])
console.log(typeof Array.isArray(set));
const setArray= Array.from(set)
console.log(setArray);
set.add(7)
console.log(set.has(5));
set.delete(3)
set.forEach
// set.delete(4)
// set.clear()

for (const iterator of set.entries()) {
    console.log(iterator);
    console.log(iterator);
}