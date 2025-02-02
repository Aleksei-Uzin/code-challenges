/**
 * Predict your age!
 * https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
 *
 */

const predictAge = (...years) =>
  Math.floor(Math.sqrt(
    years.reduce((acc, val) => acc + val ** 2, 0)
  ) / 2)
