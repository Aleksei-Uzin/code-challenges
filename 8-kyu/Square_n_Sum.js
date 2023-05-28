/**
 * Square(n) Sum
 * https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
 *
 */

function squareSum(numbers){
  const sum = numbers.reduce((a, b) => a + Math.pow(b, 2), 0)
  
  return sum
}
