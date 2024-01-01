/**
 * Concatenating functions
 * https://www.codewars.com/kata/527176c487961e5900000106/train/javascript
 *
 */

Function.prototype.pipe = function (fn) {
  return value => fn(this(value))
}

// Function.prototype.pipe = function(...fns) {
//   return value => [this, ...fns].reduce((acc, fn) => fn(acc), value)
// }
