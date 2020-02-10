// const assertArraysEqual = function(actual, expected) {

//   if (eqArrays(actual, expected)) {
//     console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`)
//   }  else {
//   console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`)
// }
// }

// let eqArrays = function(arr, arrTwo) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arrTwo[i]) {
//       return false;
//     };
//   }
//   return true;
// };

const middle = function(array) {
  let output = [];
  if(array.length % 2 === 0) {
    output = [array[(array.length/2- 1)], array[(array.length/2)]]
    return output
  } else { 
output = [array[Math.round((array.length/2)- 1)]]
return output
  }
 
}




module.exports = middle