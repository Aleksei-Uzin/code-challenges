/**
 * Sum The Array
 * https://www.codewars.com/kata/56bdf9d50d0b6433df001074/train/javascript
 *
 */

Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0)
}
