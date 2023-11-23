/**
 * Simple Fun #88: Sort By Height
 * https://www.codewars.com/kata/589577f0d1b93ae32a000001/train/javascript
 *
 */

const sortByHeight = arr => {
  const p = arr.filter(val => val !== -1).sort((a, b) => a - b)

  return arr.map(val => (val !== -1 ? p.shift() : val))
}
