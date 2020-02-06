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

const takeUntil = (array, callback) => {
  let results = []; // Enter the output into brackets
  for(let item of array) { //Loop through the array, which are in this case the numbers
   if(!callback(item)) {  // if the numbers do not equal to the callback function requirement
    results.push(item)// push the values
  } else {
    break; // if it does match the function (if the number is less than 0), break from the loop
  }
  }return results
  }
  
  
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);
  
  console.log('---');
  
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);

  let num =  [1, 2, 5, 7, 2 ]
  assertEqual(results1, num)