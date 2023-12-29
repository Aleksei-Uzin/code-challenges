/**
 * Regexp Basics - is it all whitespace?
 * https://www.codewars.com/kata/567de8823fa5eee02100002a/train/javascript
 *
 */

String.prototype.whitespace = function () {
  return /^\s*$/.test(this)
}
