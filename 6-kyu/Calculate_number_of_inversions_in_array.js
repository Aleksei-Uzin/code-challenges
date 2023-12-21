/**
 * Calculate number of inversions in array
 * https://www.codewars.com/kata/537529f42993de0e0b00181f/train/javascript
 *
 */

const countInversions = arr =>
  arr.reduce((res, val, i) => {
    const copy = arr.slice(i + 1)
    const count = copy.filter(n => n < val).length
    return res + count
  }, 0)
