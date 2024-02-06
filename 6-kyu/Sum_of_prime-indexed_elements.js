/**
 * Sum of prime-indexed elements
 * https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript
 *
 */

const total = arr => arr.reduce((sum, n, i) => (isPrime(i) ? sum + n : sum), 0)

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false
  }
  return num > 1
}
