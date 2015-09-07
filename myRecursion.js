function reduce(arr, fn, initial) {
  if (arr && arr.length) {
    var head = arr[0]
    var tail = arr.slice[1]
    initial = ++initial[head] || initial[head] = 1
    return reduce(tail, fn, initial)
  } else return initial || {}
}

module.exports = reduce
