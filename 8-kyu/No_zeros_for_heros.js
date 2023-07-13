/**
 * No zeros for heros
 * https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
 *
 */

function noBoringZeros(n) {
  if(n === 0 || n % 10) return n
  
  return noBoringZeros(n / 10)
}
