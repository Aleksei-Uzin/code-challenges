/**
 * Strings, strings, strings (Easy)
 * https://www.codewars.com/kata/56d6b921c9ae3fd926000601/train/javascript
 *
 */

Object.prototype.toString = function () {
  return JSON.stringify(this)
}

Number.prototype.toString =
  Boolean.prototype.toString =
  Array.prototype.toString =
    Object.prototype.toString
