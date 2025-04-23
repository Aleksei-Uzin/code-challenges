/**
 * Crouching Distribution, Hidden Constant
 * https://www.codewars.com/kata/5a0da79b32b8b98b8d000097/train/javascript
 *
 */

const findConstant = (arr, lb, ub) => {
  const expectedMean = (lb + ub) / 2
  const actualMean = arr.reduce((acc, num) => acc + num, 0) / arr.length
  return actualMean - expectedMean
}
