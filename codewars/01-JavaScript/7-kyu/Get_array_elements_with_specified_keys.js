/**
 * Get array elements with specified keys
 * https://www.codewars.com/kata/586a3270c66d18ad810001d4/train/javascript
 *
 */

Array.prototype.only = function (keys) {
  return this.filter((_, i) => keys.includes(i))
}
