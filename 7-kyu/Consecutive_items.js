/**
 * Consecutive items
 * https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript
 *
 */

const consecutive = (arr, a, b) => {
  const indA = arr.indexOf(a)
  const indB = arr.indexOf(b)

  return Math.abs(indA - indB) === 1
}
