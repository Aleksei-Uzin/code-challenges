/**
 * Find sum of top-left to bottom-right diagonals
 * https://www.codewars.com/kata/5497a3c181dd7291ce000700/train/javascript
 *
 */

const diagonalSum = matrix =>
  matrix.reduce((acc, arr, ind) => acc + arr[ind], 0)
