/**
 * Persistent Bugger.
 * https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
 *
 */

function persistence(num, count = 0) {
  const str = num.toString()
  const amount = str.length

  if(amount === 1) return count
  
  const result = str.split('').reduce((a, b) => a * b, 1)
  
  return persistence(result, count += 1)
}
