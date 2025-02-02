/**
 * Sum of two lowest positive integers
 * https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
 *
 */

const sumTwoSmallestNumbers = numb => {
  const sorted = numb.sort((a, b) => a - b)

  return sorted[0] + sorted[1]
}
