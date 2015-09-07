function countWords(inputWords) {
  return inputWords.reduce(function(accum, curr){
    if (accum[curr]) {accum[curr] += 1}
    else {accum[curr] = 1}
    return accum;
  }, {});
}

module.exports = countWords
