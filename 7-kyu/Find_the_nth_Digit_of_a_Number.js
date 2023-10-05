/**
 * Find the nth Digit of a Number
 * https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript
 *
 */

const findDigit = (num, nth) =>
  nth > 0 ? +(Math.abs(num).toString().at(-nth) ?? 0) : -1
