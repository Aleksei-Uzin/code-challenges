/**
 * How many consecutive numbers are needed?
 * https://www.codewars.com/kata/559cc2d2b802a5c94700000c/train/javascript
 *
 */

const consecutive = arr => {
  const len = arr.length

  return len ? Math.max(...arr) - Math.min(...arr) - (len - 1) : 0
}
