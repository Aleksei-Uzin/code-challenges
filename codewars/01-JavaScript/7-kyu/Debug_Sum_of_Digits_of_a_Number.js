/**
 * Debug Sum of Digits of a Number
 * https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript
 *
 */

const getSumOfDigits = int => {
  const digits =  Math.floor(int).toString()
  let sum = 0

  for(let ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix]
  }

  return sum
}
