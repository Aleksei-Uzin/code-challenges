/**
 * Custom each() Array method
 * https://www.codewars.com/kata/513e7e1aee7d36073e00000d/train/javascript
 *
 */

Array.prototype.each = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) return
  }
}
