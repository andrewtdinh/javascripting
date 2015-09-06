function countWords(inputWords) {
  var returnObj = {}
  return inputWords.reduce(function(accum, curr){
    if (!returnObj[curr]) {returnObj[curr] = 1}
    else {returnObj[curr] += 1}
  }, returnObj);
}

module.exports = countWords
