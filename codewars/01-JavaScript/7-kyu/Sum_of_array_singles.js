/**
 * Sum of array singles
 * https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript
 *
 */

const repeats = arr =>
  arr.reduce(
    (sum, n) => (arr.indexOf(n) === arr.lastIndexOf(n) ? sum + n : sum),
    0
  )
