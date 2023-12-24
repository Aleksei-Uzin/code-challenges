/**
 * That unites us
 * https://www.codewars.com/kata/5a3ddf58e1ce0e6f8f000030/train/javascript
 *
 */

const thatUnitesUs = (arr1, arr2, n) =>
  arr1
    .concat(arr2)
    .filter((c, i, arr) => arr.indexOf(c) === i)
    .sort()
    .slice(0, n)
