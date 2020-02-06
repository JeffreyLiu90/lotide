const assertEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


let eqArrays = function(arr, arrTwo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);



console.log(eqArrays((results1),["g", "c", "t", "m", "t"]));
assertEqual(results1,["g", "c", "t", "m", "t"]);