/**
 * Regexp Basics - is it a eight bit unsigned number?
 * https://www.codewars.com/kata/567e8f7b4096f2b4b1000005/train/javascript
 *
 */

String.prototype.eightBitNumber = function () {
  return /^(\d|([1-9]\d)|(1\d\d)|(2[0-4]\d)|(25[0-5]))$/.test(this)
}
