/**
 * Recursion 101
 * https://www.codewars.com/kata/5b752a42b11814b09c00005d/train/javascript
 *
 */

const solve = (a, b) => {
  if (a === 0 || b === 0) return [a, b]

  if (a >= 2 * b || b >= 2 * a) {
    return a > b ? solve(a - b * 2, b) : solve(a, b - a * 2)
  }

  return [a, b]
}
