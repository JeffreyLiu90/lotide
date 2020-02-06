const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { // looping through the string
    if(results[sentence[i]]) { // does this key already exist, if it does not, then go to next. If it does, then do this function below
 results[sentence[i]].push(i)// push the duplicate value into the array
     } else { results[sentence[i]] = [i]} // the value of the sentence[i] (c) = [i] which is the index number
}
return results
}

console.log(letterPositions("catsaregreat"))
