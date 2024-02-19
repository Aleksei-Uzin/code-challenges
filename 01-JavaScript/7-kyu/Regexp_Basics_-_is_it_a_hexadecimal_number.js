/**
 * Regexp Basics - is it a hexadecimal number?
 * https://www.codewars.com/kata/567c9f56d83baeed8300000f/train/javascript
 *
 */

String.prototype.hexNumber = function () {
  return /^(0x)?[0-9A-F]{1,8}$/gi.test(this)
}
