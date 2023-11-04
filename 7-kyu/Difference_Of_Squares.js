/**
 * Difference Of Squares
 * https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript
 *
 */

const differenceOfSquares = n => {
  const root = Array.from({ length: n })
  const squareOfSum = root.reduce((acc, _, i) => acc + i + 1, 0) ** 2
  const sumOfSquares = root.reduce((acc, _, i) => acc + (i + 1) ** 2, 0)

  return squareOfSum - sumOfSquares
}
