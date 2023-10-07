/**
 * Maximum Triplet Sum
 * https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript
 *
 */

const maxTriSum = numbers =>
  [...new Set(numbers)]
    .sort((a, b) => a - b)
    .reduceRight((acc, val, i, arr) =>
      i >= arr.length - 3 ? (acc += val) : acc
    )
