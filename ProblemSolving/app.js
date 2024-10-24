
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


// via Linklist


class NodeList {
    constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  function arrayToList(arr) {
    const head = new NodeList();
    let current = head;
    for (const val of arr) {
      current.next = new NodeList(val);
      current= current.next
    }
    console.log(current);
  }
  let list = [2, 7, 11, 15];
  console.log(arrayToList(list));



//   Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example



// Lily wants to find segments summing to Ron's birth day,  with a length equalling his birth month, . In this case, there are two segments meeting her criteria:  and .

// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided
// Input Format

// The first line contains an integer , the number of squares in the chocolate bar.
// The second line contains  space-separated integers , the numbers on the chocolate squares where .
// The third line contains two space-separated integers,  and , Ron's birth day and his birth month.

// Constraints

// , where ()
// Sample Input 0

// 5
// 1 2 1 3 2
// 3 2
// Sample Output 0

// 2
// Explanation 0

// Lily wants to give Ron  squares summing to . The following two segments meet the criteria:

// image

// Sample Input 1

// 6
// 1 1 1 1 1 1
// 3 2
// Sample Output 1

// 0
// Explanation 1

// Lily only wants to give Ron  consecutive squares of chocolate whose integers sum to . There are no possible pieces satisfying these constraints:

// image

// Thus, we print  as our answer.

// Sample Input 2

// 1
// 4
// 4 1
// Sample Output 2

// 1
// Explanation 2

// Lily only wants to give Ron  square of chocolate with an integer value of . Because the only square of chocolate in the bar satisfies this constraint, we print  as our answer.


function birthday(s, d, m) {
  let count = 0;
  
  // Iterate through the array, considering each possible segment of length m
  for (let i = 0; i <= s.length - m; i++) {
      // Calculate the sum of the current segment of length m
      let segmentSum = 0;
      for (let j = 0; j < m; j++) {
          segmentSum += s[i + j];
      }
      
      // If the sum matches Ron's birth day, increase the count
      if (segmentSum === d) {
          count++;
      }
  }
  
  return count;
}

// Sample Inputs
console.log(birthday([1, 2, 1, 3, 2], 3, 2));  // Output: 2
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));  // Output: 0
console.log(birthday([4], 4, 1));  // Output: 1



// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example

// There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

// Function Description

// Complete the migratoryBirds function in the editor below.

// migratoryBirds has the following parameter(s):

// int arr[n]: the types of birds sighted
// Returns

// int: the lowest type id of the most frequently sighted birds
// Input Format

// The first line contains an integer, , the size of .
// The second line describes  as  space-separated integers, each a type number of the bird sighted.

// Constraints

// It is guaranteed that each type is , , , , or .
// Sample Input 0

// 6
// 1 4 4 4 5 3
// Sample Output 0

// 4
// Explanation 0

// The different types of birds occur in the following frequencies:

// Type :  bird
// Type :  birds
// Type :  bird
// Type :  birds
// Type :  bird
// The type number that occurs at the highest frequency is type , so we print  as our answer.

// Sample Input 1

// 11
// 1 2 3 4 5 4 3 2 1 3 4
// Sample Output 1

// 3
// Explanation 1

// The different types of birds occur in the following frequencies:

// Type : 
// Type : 
// Type : 
// Type : 
// Type : 
// Two types have a frequency of , and the lower of those is type .

// Object.keys(console).forEach(method => console[method] = () => {});
function migratoryBirds(arr) {
  const birdCount = {}; 
  for (let i = 0; i < arr.length; i++) {
    birdCount[arr[i]]=(birdCount[arr[i]]|| 0)+1
  }
  console.log(birdCount);
  
  let maxCount = 0;
  let mincount= Number.MIN_SAFE_INTEGER
  for (const bird in birdCount) {
    const count = birdCount[bird];
    if(count > maxCount){
      maxCount=count
      mincount=bird
    }
    else if (count === maxCount) {
      mincount = Math.min(mincount, parseInt(bird));
    }
  }
 return mincount
  
}

const bird_sightings = [1, 2, 3 ,4 ,5 ,4 ,3 ,2, 1, 3, 4];
const bird_sightings_1 = [1, 4 ,4 ,4, 5, 3
];
console.log(migratoryBirds(bird_sightings_1));  // Output: 4


// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Hints: Beware of integer overflow! Use 64-bit Integer.



function miniMaxSum(arr) {
  // Write your code here
  let sum = 0
  let sumArray = []
  for (let i = 0; i < arr.length; i++) {
     sum += arr[i]
  }
  for (const key of arr) {

     sumArray.push(sum - key)

  }
   const minSum = Math.min(...sumArray);
  const maxSum = Math.max(...sumArray);
  console.log(minSum,maxSum);

}

const minmax = [1, 3, 5, 7, 9]

console.log(miniMaxSum(minmax));



// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45


function timeConversion(s) {
  const timeConversion = s.slice(-2)
  let timewithoutFormat = s.slice(0, -2)
  let [hours, minutes, seconds] = timewithoutFormat.split(':')
  if (timeConversion === 'AM') {
    if (hours === '12') {
      hours = '00'; // Midnight case
    }
  }
  else if (timeConversion === 'PM') {
    if (hours !== '12') {
      hours = String(parseInt(hours) + 12); // Convert to 24-hour format
    }
  }
  return `${hours}:${minutes}:${seconds}`;

}

let timeInput = "07:05:45PM";

console.log(timeConversion(timeInput));


// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// a=[1,2,3,4,3,2,1]


// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .


function lonelyinteger(a) {
  let uniqueElement = 0;
  for (const element of a) {
      uniqueElement ^= element
  }
  return uniqueElement
}
const a=[1,2,3,4,3,2,1]
console.log(lonelyinteger(a));



// Find Repeating Elements

function findRepeatingElements(arr) {
  const countMap = {};
  const repeatingElements=[]
  for (const element of arr) {
    countMap[element] = (countMap[element] || 0) + 1
    
  }

  for (const key in countMap) {
      console.log(key);
      if(countMap[key]>1){
        repeatingElements.push(parseInt(key))
      }
      
  }
  return repeatingElements
  
}

console.log(findRepeatingElements(a));
