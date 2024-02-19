/**
 * Operations with sequence
 * https://www.codewars.com/kata/596ddaccdd42c1cf0e00005c/train/javascript
 *
 */

const calc = arr =>
  arr.reduce((sum, n, i) => {
    if (n > 0) n = n ** 2
    if ((i + 1) % 3 === 0) n = n * 3
    if ((i + 1) % 5 === 0) n = n * -1

    return sum + n
  }, 0)
