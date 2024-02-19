/**
 * Char Code Calculation
 * https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
 *
 */

const calc = x => {
  const total1 = x.replace(/\w/g, match => match.charCodeAt(0))
  const total2 = total1.replace(/7/g, '1')
  const sum1 = total1.split('').reduce((acc, n) => acc + parseInt(n), 0)
  const sum2 = total2.split('').reduce((acc, n) => acc + parseInt(n), 0)

  return sum1 - sum2
}
