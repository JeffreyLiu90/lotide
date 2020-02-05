const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) { // This a for loop to go through each of the items in allItems
    if (itemsToCount[item]) {// If the second parameter (itemsCount) appears as true, then do the following
    if (results[item]) { // If the item exists, input one, and keep going if there is more
      results[item] += 1;
    } else {
      results[item] = 1;// if there is only 1 item, then stay at 1
    }
  }
}

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// Use countOnly function
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Karima"], undefined);


  


// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);