/**
 * Regexp Basics - is it IPv4 address?
 * https://www.codewars.com/kata/567fe8b50c201947bc000056/train/javascript
 *
 */

String.prototype.ipv4Address = function () {
  return /^((\d|([1-9]\d)|(1\d\d)|(2[0-4]\d)|(25[0-5]))\.?\b){4}$/.test(this)
}
