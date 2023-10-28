/**
 * Genetic Algorithm Series - #1 Generate
 * https://www.codewars.com/kata/567d609f1c16d7369c000008/train/javascript
 *
 */

const generate = length => {
  let res = ''

  while (length > 0) {
    res += ~~(2 * Math.random())
    length--
  }

  return res
}
