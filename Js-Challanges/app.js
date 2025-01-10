// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

const counter= function(n) {
    return function() {
        return n++
    };
};

counter(1)
counter(2)
counter(3)


// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

const expect = (val) => {
    return {
        toBe: (parameters) => {
         if(val===parameters){
            return true
         } 
         else{
            throw new Error("Not Equal")
         } 
        },
        notToBe: (parameters) => {
            if(val!==parameters){
               return true
             } 
             else{
                throw new Error("Equal")
             } 
        }
    }
}


// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0
 

// Constraints:

// -1000 <= init <= 1000
// 0 <= calls.length <= 1000
// calls[i] is one of "increment", "decrement" and "reset"


const createCounter = (init) => {
    let initialValue= init
    return {
        increment: () => ++init,
        decrement: () => --init,
        reset: () => init = initialValue
    }
}

const counter1 = createCounter(5)
console.log(counter1.increment());
console.log(counter1.decrement());
console.log(counter1.reset());



// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

    // const map = function(arr, fn) {
    // let newArray= new Array(arr.length)
    //     for (const key in arr) {
    //     newArray[key]=  fn(arr[key], key)
    //     } 
    //     return newArray   
    // };
    // function plusone(n) { return n + 1; }
    // console.log(map([2,4,5,6,7,1],plusone));


const map = function (arr, fn) {
    let newArray = new Array(arr.length)
    for (let i = 0; i < arr.length; i++)  {
        newArray[i] = fn(arr[i], i)
    }
    return newArray
};
function plusone(n) { return n + 1; }
console.log(map([2, 4, 5, 6, 7, 1], plusone));
    
