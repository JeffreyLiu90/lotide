const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  let movieNames = Object.keys(object);
  for (let movies of movieNames) { // looping through the keys/ movie names of object (what we're looking at) i.e. Blue Hill, Noma, etc.
    if (callback(object[movies])) { //passing the rating object {stars: 1}, {stars: 2} -   to callback- object- movies - and the callback function is states x.stars
    //so this way x.stars = movies.stars = looking for values. Exits right after it finds the first one that matches
      return movies;
    }
  }
};
  
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));
  

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
  
assertEqual(result, "noma");