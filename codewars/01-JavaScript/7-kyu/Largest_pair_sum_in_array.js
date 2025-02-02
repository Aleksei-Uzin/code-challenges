/**
 * Largest pair sum in array
 * https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
 *
 */

const largestPairSum = numbers =>
  numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((acc, val) => acc + val, 0)
