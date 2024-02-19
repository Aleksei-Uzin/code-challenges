/**
 * Currying functions: multiply all elements in an array
 * https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript
 *
 */

const multiplyAll = numbers =>
  n => numbers.map(number => number * n)
