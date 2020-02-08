const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqObjects = function(object1, object2) {
  let objectOneKeys = Object.keys(object1);  //store the keys of object 1 in objectOneKeys
  let objectTwoKeys = Object.keys(object2); // store the keys of object 2 in objectTwoKeys
  if (objectOneKeys.length !== objectTwoKeys.length) { // if the length of the keys are not equal, automatically false
    return false;
  }
  for (let key of objectOneKeys) { /*iterate through object keys and store that in a variable*/
    if (Array.isArray(object1[key])) { /*checks the value of each of the keys to see if its an array. If it is an array it sends that key and the second objects corresponding key to the function eqArrays. */
      return eqArrays(object1[key],object2[key]);
    } else if (object1[key] !== object2[key]) {/*checks the value of the object and the index stored in the
        variable against the value of second object and*/
      return false;
    } else {
      return true;
    }
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { c: "1", d: ["2", 3] };

console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(cd, dc));// => true
assertEqual(eqObjects(ab, ba),true); // => true
assertEqual(eqObjects(ab, abc),true); // => true
assertEqual(eqObjects(cd, cd3),true); // => true
assertEqual((eqObjects(cd, cd2)), false); // => false
console.log((eqObjects(cd, cd2))); // => false
console.log((eqObjects(cd, cd3))); // => true

// console.log(eqObjects(ab, ba)); // => true




// assertEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(cd, cd2)
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(ab, abc); // => false
