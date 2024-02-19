/**
 * Nice Array
 * https://www.codewars.com/kata/59b844528bcb7735560000a0/train/javascript
 *
 */

// A
const isNice = arr =>
  arr.length > 0
    ? arr.every(n => arr.some(val => Math.abs(val - n) === 1))
    : false

// B
const _isNice = arr => {
  if (arr.length === 0) return false

  for (let n of arr) {
    if (!arr.some(val => Math.abs(val - n) === 1)) return false
  }

  return true
}
