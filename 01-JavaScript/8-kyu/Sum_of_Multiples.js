/**
 * Sum of Multiples
 * https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
 *
 */

function sumMul(n, m) {
  if(n <= 0 || m <= 0) return 'INVALID'

  let sum = 0
  
  for(let i = 1; (n * i) < m; i++) {
    sum += n * i
  }
  
  return sum
}
