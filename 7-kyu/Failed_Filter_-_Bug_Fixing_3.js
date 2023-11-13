/**
 * Failed Filter - Bug Fixing #3
 * https://www.codewars.com/kata/55c606e6babfc5b2c500007c/train/javascript
 *
 */

const FilterNumbers = str =>
  str
    .split('')
    .filter(c => Number.isNaN(parseInt(c)))
    .join('')
