/**
 * Custom Array Filters
 * https://www.codewars.com/kata/53fc954904a45eda6b00097f/train/javascript
 *
 */

Array.prototype.even = function () {
  return this.filter(val => Number.isInteger(val) && val % 2 === 0)
}

Array.prototype.odd = function () {
  return this.filter(val => Number.isInteger(val) && val % 2 !== 0)
}

Array.prototype.under = function (x) {
  return this.filter(val => Number.isInteger(val) && val < x)
}

Array.prototype.over = function (x) {
  return this.filter(val => Number.isInteger(val) && val > x)
}

Array.prototype.inRange = function (min, max) {
  return this.filter(val => Number.isInteger(val) && val >= min && val <= max)
}
