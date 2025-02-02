/**
 * Factorial
 * https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
 *
 */

const factorial = n => {
  if (n < 0 || n > 12) {
    throw new RangeError('The argument must be between 0 and 12')
  }

  return n === 0 ? 1 : factorial(n - 1) * n
}
