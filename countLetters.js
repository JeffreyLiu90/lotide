const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♂️🙅🏻‍♂️🙅🏻‍♂️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  const letterCount = {};
  word = word.split(" ").join("").toLowerCase(); // Splits the word, taking out spaces, and then joining together as one word. This way, it won't count the spaces
  for (const item of word) { // This a for loop to go through each of the items in all Items
    
    if (letterCount[item]) { // If the item exists, input one, and keep going if there is more
      letterCount[item] += 1;
    } else {
      letterCount[item] = 1;// if there is only 1 item, then stay at 1
    }
  }
  return letterCount;
};

 
console.log(countLetters("Lighthouse in the house"));// This shows { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
const result1 = countLetters("Lighthouse in the house");// This becomes { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }

assertEqual(result1.l, 1); // you call the key, and compare the value to what it is being compared to
