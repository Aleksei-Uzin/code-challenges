/**
 * Array#reduce
 * https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3/train/javascript
 *
 */

Array.prototype.reduce = function (process, initial) {
  let res = initial

  for (let i = 0; i < this.length; i++) {
    if (res === undefined) {
      res = process(this[i], this[i + 1])
      i++
    } else {
      res = process(res, this[i])
    }
  }

  return res
}
