/**
 * Summing a number's digits
 * https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
 *
 */

const sumDigits = number =>
  Math.abs(number)
    .toString()
    .split('')
    .reduce((acc, val) => acc += +val, 0)
