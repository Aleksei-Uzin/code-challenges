/**
 * Count of positives / sum of negatives
 * https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
 *
 */

function countPositivesSumNegatives(input) {
  if(!input || !input.length) return []

  const has = n => n > 0
  const invert = n => !has(n)
  const sum = (a, b) => a + b

  const positivesN = input.filter(has).length
  const negativeArr = input.filter(invert)
  const negativeSum = negativeArr.reduce(sum, 0)

  return [positivesN, negativeSum]
}
