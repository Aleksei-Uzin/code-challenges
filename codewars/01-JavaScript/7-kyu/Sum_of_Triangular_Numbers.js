/**
 * Sum of Triangular Numbers
 * https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript
 *
 */

const sumTriangularNumbers = n => {
  let sum = 0

  if (n < 0) return sum

  for (let i = 1; i <= n; i++) {
    sum += (i * (i + 1)) / 2
  }

  return sum
}
