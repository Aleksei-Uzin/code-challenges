/**
 * Working with arrays II (and why your code fails in some katas)
 * https://www.codewars.com/kata/5a7b3d08fd5777bf6a000121/train/javascript
 *
 */

function removeNthElement(arr, n) {
  var arrCopy = arr.slice()
  arrCopy.splice(n, 1)
  return arrCopy
}
