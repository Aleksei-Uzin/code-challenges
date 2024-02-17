/**
 * Trim method
 * https://www.codewars.com/kata/5a0b33888ba914a5e40000b7/train/javascript
 *
 */

String.prototype.trim = function (c = ' ') {
  return this.replace(new RegExp(`^${c}+|${c}+$`, 'gi'), '')
}
