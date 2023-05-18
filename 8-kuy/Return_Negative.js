/**
 * Return Negative
 * https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
 * 
 */

function makeNegative(num) {
  const isPositive = num > 0

  return isPositive ? num * -1 : num
}
