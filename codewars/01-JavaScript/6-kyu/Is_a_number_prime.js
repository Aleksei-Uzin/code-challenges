/**
 * Is a number prime?
 * https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
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
//
// function isPrime(num) {
//   if (num < 2) return false;
//   const limit = Math.sqrt(num);
//   for (let i = 2; i <= limit; ++i) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
