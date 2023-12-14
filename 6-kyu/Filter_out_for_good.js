/**
 * Filter out for good!
 * https://www.codewars.com/kata/56035d75426e197c3e0000a2/train/javascript
 *
 */

Array.prototype.remove = function (pred) {
  const len = this.length
  const copy = this.slice()
  const res = []
  this.length = 0

  for (let i = 0; i < len; i++) {
    const item = copy[i]
    pred(item) ? res.push(item) : this.push(item)
  }

  return res
}
