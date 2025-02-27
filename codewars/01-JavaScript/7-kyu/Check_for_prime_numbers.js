/**
 * Check for prime numbers
 * https://www.codewars.com/kata/53daa9e5af55c184db00025f/train/javascript
 *
 */

const isPrime = n => {
  if (n <= 1) return false
  if (n <= 3) return true

  if (n % 2 === 0 || n % 3 === 0) return false

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }

  return true
}

// Best practice
// But not efficient for large numbers
//
// function isPrime(n) {
//   if (n < 2) { return false }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return true
// }
