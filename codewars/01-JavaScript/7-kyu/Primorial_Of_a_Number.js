/**
 * Primorial Of a Number
 * https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124/train/javascript
 *
 */

const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false
  }

  return true
}
const numPrimorial = n => {
  let res = 1
  let x = 2

  while (n > 0) {
    if (isPrime(x)) {
      res *= x
      n -= 1
    }
    x += 1
  }

  return res
}
