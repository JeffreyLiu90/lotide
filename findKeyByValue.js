const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let findKeyByValue = function(object,value) {
  let keysInObject = Object.keys(object);

  for (key of keysInObject) {
    let valueOfTheKeyInObject = object[key];
    if (valueOfTheKeyInObject === value) {
      return key;
    }
  }
  return;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

