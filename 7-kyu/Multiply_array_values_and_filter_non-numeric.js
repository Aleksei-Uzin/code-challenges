/**
 * Multiply array values and filter non-numeric
 * https://www.codewars.com/kata/55ed875819ae85ca8b00005c/train/javascript
 *
 */

const multiplyAndFilter = (arr, multiplier) =>
  arr.filter(val => typeof val === 'number').map(n => n * multiplier)
