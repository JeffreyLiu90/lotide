const flatten = (arr) => {
  let result = [];// the array to be pushed into
  for (let num of arr) { // loop through the array, so shows [1, 2, [3, 4], 5, [6]]
    if (Array.isArray(num)) { // if there is an array inside
      for (let nested of num) { // loop through and value becomes the elements within the nested arrays
        result.push(nested); // push the elements within the nested array
      }
    } else {
      result.push(num); // push the ones in the array, and then keep going, if another array appears, go in again
    }
  } return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
// const flatten = function (array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       for (let j = 0; j < array[i].length; j++)
//         result.push(array[i][j]);
//     } else {
//       result.push(array[i]);
//     };
//   };
//   return result;
// };



