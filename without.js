let without = (source, itemsToRemove) => {
  let output = [];
  for (let sourceValues of source) {
    if (!contain(itemsToRemove, sourceValues)) {
      output.push(sourceValues);
    }
  } return output;
};

let contain = (arr, value) => {
  for (let i of arr) {
    if (i === value) {
      return true;
    }
  } return false;
};

// let without1 = (source, itemsToRemove) => {
//   let output = [];
//   for(let sourceValues of source) {
//     if (!itemsToRemove.includes(sourceValues)) {
//       output.push(sourceValues)
//     }
//   }return output
//   }
  

console.log(without(["1", "2", "3"], [1, 2, "3"])); // ==> 1,2]
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));


