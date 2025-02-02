/**
 * Exclamation marks series #14: Convert the exclamation marks and question marks to a prime number
 * https://www.codewars.com/kata/57fb1705f815ebd49e00024c/train/javascript
 *
 */

const convert = s => {
  let n = +s.replace(/(\!|\?)\1*/g, m => m.length)
  let i = 2

  while (!isPrime(n)) {
    while (n % i) i++
    n /= i
  }

  return n
}
const isPrime = n => {
  for (let i = 2; i < n; i++)
    if (n % i == 0) {
      return false
    }

  return true
}
