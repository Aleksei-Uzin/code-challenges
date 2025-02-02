/**
 * Find all occurrences of an element in an array
 * https://www.codewars.com/kata/59a9919107157a45220000e1/train/javascript
 *
 */

const findAll = (array, n) =>
  array.reduce((acc, val, i) => (val === n ? [...acc, i] : acc), [])
