/**
 * Multiply the number
 * https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript
 *
 */

const multiply = num => {
  const pow = Math.abs(num).toString().length
  
  return num * Math.pow(5, pow)
}
