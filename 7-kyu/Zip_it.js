/**
 * Zip it!
 * https://www.codewars.com/kata/56aaf25213edd3a88a000002/train/javascript
 *
 */

Array.prototype.zip = function (arr, fn) {
  const min = Math.min(this.length, arr.length)
  const res = []

  for (let i = 0; i < min; i++) {
    res.push(fn(this[i], arr[i]))
  }

  return res
}
