/**
 * Array Helpers
 * https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
 *
 */

Array.prototype.square = function () {
  return this.map(val => val ** 2)
}
Array.prototype.cube = function () {
  return this.map(val => val ** 3)
}
Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0)
}
Array.prototype.average = function () {
  return this.sum() / this.length
}
Array.prototype.even = function () {
  return this.filter(val => val % 2 === 0)
}
Array.prototype.odd = function () {
  return this.filter(val => val % 2 !== 0)
}
