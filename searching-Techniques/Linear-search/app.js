// Linear search is one of the simplest searching techniques, and its use cases generally revolve around scenarios
// where more sophisticated searching algorithms are either unnecessary or cannot be applied due to constraints. Below are the primary use cases:
// Small Datasets
// Unsorted or Unordered Data
// Searching in Linked Lists

function linearSearch(array, target) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === target) {
            return `Item has been found at the index "${index}"`
        }
    }
    return "Item didn't found in the Array"
}
const array = [10, 20, 30, 40, 50];
const target = 3;
console.log(linearSearch(array, target));

const array1 = [5, 15, 25, 35, 45];
console.log(linearSearch(array1, 25)); // Output: 2
console.log(linearSearch(array1, 100)); // Out

