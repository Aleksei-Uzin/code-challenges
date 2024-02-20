/**
 * Broken Collatz
 * https://www.codewars.com/kata/57e8c68c97a05990b10000c3/train/javascript
 *
 */

function collatz(n, count = 1) {
  if (n === 1) return count
  n = n % 2 === 0 ? n / 2 : n * 3 + 1
  return collatz(n, count + 1)
}
