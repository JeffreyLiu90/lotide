const assertEqual = function(actual, expected) {

  if ((actual === expected)) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// let assertArraysEqual = function(arr, arrTwo) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arrTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };




module.exports = assertEqual;