/**
 * Sum of positive
 * https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
 * 
 */

function positiveSum(arr) {
  const positiveNumbers = arr.filter(number => number > 0)
  const isPositive = positiveNumbers.length > 0

  return (
    isPositive
    ? positiveNumbers.reduce((x, y) => x + y)
    : 0
  )
}
