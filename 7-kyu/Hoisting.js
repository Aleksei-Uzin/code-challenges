/**
 * Hoisting
 * https://www.codewars.com/kata/5504b15fd181b977c30001d5/train/javascript
 *
 */

var sorted = 0

function sort(array) {
  // Mark function as called through the global variable
  sorted = 1

  // Transform the input data
  for (var i = 0; i < array.length; i++) {
    array[i] = 3 * array[i] + 2
  }

  // Remove middle value
  var n = array.length,
    mid = Math.floor(n / 2)
  array = array.slice(0, mid).concat(array.slice(mid + 1))

  // Sort the array
  ;(function () {
    var sorted = false
    for (var i = array.length - 1; i >= 0 && !sorted; i--) {
      sorted = true
      for (var j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1)
          sorted = false
        }
      }
    }
  })()

  return array
}
