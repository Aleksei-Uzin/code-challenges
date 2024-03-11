/**
 * Sorting the Odd way!
 * https://www.codewars.com/kata/57fb79784e2d0639c9000066/train/javascript
 *
 */

const sortItOut = arr => {
  const even = arr.filter(n => !(~~n % 2)).sort((a, b) => b - a)
  const odd = arr.filter(n => ~~n % 2).sort((a, b) => a - b)

  return [...odd, ...even]
}
