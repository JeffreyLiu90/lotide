// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


let eqArrays = function(arr, arrTwo) {
  for (let i = 0; i < arr.length; i++) {
  
    if (arr[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true)

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) 
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) 

module.exports = eqArrays
