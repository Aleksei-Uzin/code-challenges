/**
 * Simplify the number!
 * https://www.codewars.com/kata/5800b6568f7ddad2c10000ae/train/javascript
 *
 */

const simplify = numb =>
  [...`${numb}`].reduce((acc, n, i, arr) => {
    if (i < arr.length - 1) {
      return n !== '0' ? acc + `${n}*${'10'.padEnd(arr.length - i, '0')}+` : acc
    } else {
      return n === '0' ? acc.slice(0, -1) : acc + n
    }
  }, '')
