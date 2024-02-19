/**
 * Find the next perfect square!
 * https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
 *
 */

const findNextSquare = sq => {
  const n = Math.sqrt(sq)

  return Number.isInteger(n) ? (n + 1) ** 2 : -1
}
