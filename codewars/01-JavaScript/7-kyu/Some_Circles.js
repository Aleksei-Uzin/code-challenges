/**
 * Some Circles
 * https://www.codewars.com/kata/56143efa9d32b3aa65000016/train/javascript
 *
 */

const sumCircles = (...args) => {
  const sum = args.reduce((acc, r) => acc + Math.PI * Math.pow(r / 2, 2), 0)

  return `We have this much circle: ${Math.round(sum)}`
}
