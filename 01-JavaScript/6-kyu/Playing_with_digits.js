/**
 * Playing with digits
 * https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
 *
 */

function digPow(n, p){
  const arr = n.toString().split('')
  let pow = p
  let sum = 0
  let result = 0
  
  arr.forEach(x => sum += Math.pow(x, pow++))
  
  result = sum / n
  
  return Number.isInteger(result) ? result : -1
}
