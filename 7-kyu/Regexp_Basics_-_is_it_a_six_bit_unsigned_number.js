/**
 * Regexp Basics - is it a six bit unsigned number?
 * https://www.codewars.com/kata/567e8dbb9b6f4da558000030/train/javascript
 *
 */

String.prototype.sixBitNumber = function () {
  return /^(\d|([1-5]\d)|(6[0-3]))$/.test(this)
}
