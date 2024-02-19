/**
 * Calculate average
 * https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
 *
 */

function findAverage(arr) {
  const len = arr.length
  
  return len ? arr.reduce((a, b) => a + b) / len : 0
}
