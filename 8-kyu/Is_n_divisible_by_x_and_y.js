/**
 * Is n divisible by x and y?
 * https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
 *
 */

function isDivisible(n, x, y) {
  const resX = n % x  
  const resY = n % y
  
  return !resX && !resY ? true : false
}

// Or
// function isDivisible(n, x, y) {
//   const resX = n % x  
//   const resY = n % y
//
//   return !resX && !resY
// }
