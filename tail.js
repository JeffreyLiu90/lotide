// const assertEqual = require('./assertEqual')

// const assertEqual = function(actual, expected) {
//   if (check(actual,expected)) {
//     console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

let tail = function(arr) {
  let arrOne =  arr.slice(1,arr.length);
  return arrOne;
};

// let check = function(arr, arrTwo) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], arrTwo[i]);
//     if (arr[i] !== arrTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

module.exports = tail 
