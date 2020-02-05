const assertEqual = function(actual, expected) {

  if (assertArraysEqual(actual, expected)) {
    if (actual.length > 0 && actual.length <= 2) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}, and the middle has no value because it is too short`);
  } else {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}, and the middle is ${middle(actual)}`);
  } } else {
  console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected} and the middle of first array is ${middle(actual)} and middle of second array is ${middle(expected)}`);
  }
};


let assertArraysEqual = function(arr, arrTwo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};


const middle = function(array) {
  let output = "";
  if(array.length % 2 === 0) {
    output = [array[(array.length/2- 1)], array[(array.length/2)]]
    return output
  } else { 
output = [array[Math.round((array.length/2)- 1)]]
return output
  }
 
}

assertEqual(["1", "2", "3", "4", "5"], ["1", "2", "3", "4"]);
