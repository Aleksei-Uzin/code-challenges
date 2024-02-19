/**
 * Jaden Casing Strings
 * https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
 *
 */

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(val => `${val.slice(0, 1).toUpperCase()}${val.slice(1)}`)
    .join(' ')
}
