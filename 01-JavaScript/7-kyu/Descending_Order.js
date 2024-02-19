/**
 * Descending Order
 * https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
 *
 */

const descendingOrder = num =>
  +[...num.toString()]
    .sort((a, b) => b - a)
    .join('')
