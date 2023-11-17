/**
 * Lowercase strings in array
 * https://www.codewars.com/kata/5729fa716c7d26dc84000040/train/javascript
 *
 */

const arrayLowerCase = arr =>
  arr.map(val => (typeof val === 'string' ? val.toLowerCase() : val))
