/**
 * Array arithmetic
 * https://www.codewars.com/kata/5645fda2956e462b5100005e/train/javascript
 *
 */

Array.prototype.valueOf = function () {
  if (this.length === 0) return 0
  else return this.reduce((acc, n) => acc + n)
}
