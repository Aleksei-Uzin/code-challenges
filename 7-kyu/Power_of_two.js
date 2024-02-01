/**
 * Power of two
 * https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
 *
 */

const isPowerOfTwo = n => {
  if (n === 2 || n === 1) return true
  if (n % 2 !== 0 || n < 1) return false

  return isPowerOfTwo(n / 2)
}

// Best practice
//
// function isPowerOfTwo(n) {
//   return Number.isInteger(Math.log2(n))
// }
