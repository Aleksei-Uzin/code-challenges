/**
 * Remove method in Arrays
 * https://www.codewars.com/kata/565d76490397dcf0e700001e/train/javascript
 *
 */

Array.prototype.remove = function (index) {
  if (typeof index === 'number' && index >= 0) this.splice(index, 1)

  return this
}
