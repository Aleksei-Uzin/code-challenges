/**
 * Extending JavaScript Objects: Reverse String
 * https://www.codewars.com/kata/581270cb4927602fc800005a/train/javascript
 *
 */

String.prototype.reverse = function () {
  return [...this].reverse().join('')
}
