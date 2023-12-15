/**
 * Find the missing element between two arrays
 * https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript
 *
 */

const findMissing = (...args) => {
  const sum = (a, b) => a + b
  const [sum1, sum2] = args.map(arr => arr.reduce(sum, 0))

  return sum1 - sum2
}
