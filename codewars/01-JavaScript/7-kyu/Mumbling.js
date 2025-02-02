/**
 * Mumbling
 * https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
 *
 */

const accum = str =>
  str
    .toLowerCase()
    .split('')
    .map((x, i) => `${x.toUpperCase()}${x.repeat(i)}`)
    .join('-')
