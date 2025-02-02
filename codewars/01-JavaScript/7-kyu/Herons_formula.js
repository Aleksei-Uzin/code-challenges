/**
 * Heron's formula
 * https://www.codewars.com/kata/57aa218e72292d98d500240f/train/javascript
 *
 */

const heron = (a, b, c) => {
  const s = (a + b + c) / 2
  return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2)
}
