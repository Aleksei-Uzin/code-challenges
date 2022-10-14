/**
 * Return Negative
 * https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function makeNegative(num) {
  const isPositive = num > 0

  return isPositive ? num * -1 : num
}
