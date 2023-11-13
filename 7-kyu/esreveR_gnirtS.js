/**
 * esreveR gnirtS
 * https://www.codewars.com/kata/52b74e0936d582d9210005ff/train/javascript
 *
 */

String.prototype.reverse = function () {
  return this.split('').reduceRight((acc, val) => acc + val, '')
}
