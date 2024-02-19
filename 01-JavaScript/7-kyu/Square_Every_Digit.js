/**
 * Square Every Digit
 * https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
 *
 */

const squareDigits = num => +num
  .toString()
  .split('')
  .map(n => n ** 2)
  .join('');
