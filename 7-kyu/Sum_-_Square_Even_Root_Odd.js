/**
 * Sum - Square Even, Root Odd
 * https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript
 *
 */

const sumSquareEvenRootOdd = ns =>
  +ns
    .reduce((sum, n) => sum + (n % 2 === 0 ? n ** 2 : Math.sqrt(n)), 0)
    .toFixed(2)
