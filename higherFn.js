function repeat(operation, num){
  num -= 1
  num === 0 ? operation() : repeat(operation, num);
}

module.exports = repeat
