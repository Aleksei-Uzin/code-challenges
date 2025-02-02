/**
 * Unique Sum
 * https://www.codewars.com/kata/56b1eb19247c01493a000065/train/javascript
 *
 */

const uniqueSum = lst =>
  lst
    .filter((n, i, arr) => !arr.includes(n, i + 1))
    .reduce((acc, n) => acc + n, null)
