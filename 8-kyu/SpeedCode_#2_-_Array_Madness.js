/**
 * SpeedCode #2 - Array Madness
 * https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
 *
 */

function arrayMadness(a, b) {
  const sumA = a.reduce((x, y) => x + Math.pow(y, 2), 0)
  const sumB = b.reduce((x, y) => x + Math.pow(y, 3), 0)
  
  return sumA > sumB ? true : false
}
