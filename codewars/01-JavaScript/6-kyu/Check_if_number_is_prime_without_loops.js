/**
 * Check if number is prime without loops
 * https://www.codewars.com/kata/58878393fc23972533001434/train/javascript
 *
 */

const isPrime = (n, div = 2) => {
  n = Math.abs(n)
  if (n <= 2) return n === 2
  if (n % div === 0) return false
  if (div * div > n) return true

  return isPrime(n, div + 1)
}
