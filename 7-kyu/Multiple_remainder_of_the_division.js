/**
 * Multiple remainder of the division
 * https://www.codewars.com/kata/5a2f83daee1aae4f1c00007e/train/javascript
 *
 */

const isMultiple = (a, b, n) => {
  const remainder = +(a / b).toFixed(1).slice(-1)

  return !!remainder && Number.isInteger(remainder / n)
}
