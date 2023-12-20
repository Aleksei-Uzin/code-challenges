/**
 * Wrapped Function
 * https://www.codewars.com/kata/511ed4593ba69cba1a000002/train/javascript
 *
 */

Function.prototype.wrap = function (fn) {
  return (...params) => fn(this, ...params)
}
