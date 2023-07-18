/**
 * Wilson primes
 * https://www.codewars.com/kata/55dc4520094bbaf50e0000cb/train/javascript
 *
 */

function amIWilson(p) {
  const n = BigInt(p)

  function factorial(n) {
    if (n <= 1n) {
      return 1n
    }
    
    return n * factorial(n - 1n)
  }

  return ((factorial(n - 1n) + 1n) % (n * n)) === 0n
}
