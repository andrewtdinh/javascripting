function reduce(arr, fn, initial) {
  if (arr.length) {
    var head = arr[0]
    var tail = arr.slice[1]
    return head + reduce(tail, fn, initial)
  }
  else return initial
}

module.exports = reduce
