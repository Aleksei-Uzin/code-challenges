/**
 * Fac Recursion (Pest control - find the bugs and fix them)
 * https://www.codewars.com/kata/57fa92b25c9910e7bc0001df/train/javascript
 *
 */

function facRecursion(value) {
  if (value < 0) return 0
  if (value === 1 || value === 0) return 1

  return value * facRecursion(value - 1)
}
