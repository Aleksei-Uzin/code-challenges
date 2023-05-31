/**
 * How good are you really?
 * https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
 *
 */

function betterThanAverage(classPoints, yourPoints) {
  const arr = [...classPoints, yourPoints]
  const len = arr.length
  const average = Math.round(arr.reduce((a, b) => a + b, 0)) / len
  
  return yourPoints > average
}
