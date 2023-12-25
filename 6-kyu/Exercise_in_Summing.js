/**
 * Exercise in Summing
 * https://www.codewars.com/kata/52cd0d600707d0abcd0003eb/train/javascript
 *
 */

const minimumSum = (values, n) =>
  values
    .sort((a, b) => a - b)
    .reduce((acc, num, i) => (n-- > 0 ? acc + num : acc), 0)

const maximumSum = (values, n) =>
  values
    .sort((a, b) => a - b)
    .reduceRight((acc, num, i) => (n-- > 0 ? acc + num : acc), 0)
