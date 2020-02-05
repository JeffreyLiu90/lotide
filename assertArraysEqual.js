const assertEqual = function(actual, expected) {

  if (assertArraysEqual(actual, expected)) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
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



assertEqual(["1", "2", "3"], ["1", "2", "3"]);
