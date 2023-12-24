/**
 * Array.prototype.reverse()
 * https://www.codewars.com/kata/53b2ff49b82af296ce001139/train/javascript
 *
 */

Array.prototype.reverse = function () {
  const len = this.length

  for (let i = 0; i < ~~(len / 2); i++) {
    const a = this[i]
    const b = this[len - i - 1]

    this[i] = b
    this[len - i - 1] = a
  }

  return this
}
