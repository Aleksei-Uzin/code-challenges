/**
 * Odd or Even?
 * https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
 *
 */

const oddOrEven = arr => {
  const sum = arr.reduce((a, b) => a + b, 0)
  
  return sum % 2 ? 'odd' : 'even'
}
