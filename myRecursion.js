function reduce(arr, fn, initial) {
  if (!arr.length) return initial
  var head = arr[0]
  var tail = arr.slice[1]
  return head + reduce(tail, fn, initial)
}

module.exports = reduce
