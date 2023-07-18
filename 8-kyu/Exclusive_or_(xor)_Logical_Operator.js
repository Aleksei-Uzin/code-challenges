/**
 * Exclusive "or" (xor) Logical Operator
 * https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript
 *
 */

const xor = (a, b) => {
  if(a && b || !a && !b) return false
  
  return true
}
