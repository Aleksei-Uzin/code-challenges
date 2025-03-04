/**
 * Coding 3min : Are they symmetrical?
 * https://www.codewars.com/kata/5705cc3161944b10fd0004ba/train/javascript
 *
 */

const sc = obj => {
  const arr = Array.isArray(obj) ? obj : [...`${obj}`]

  if (arr.length < 2) return true

  return arr.shift() === arr.pop() ? sc(arr) : false
}
