/**
 * String Scramble
 * https://www.codewars.com/kata/5822d89270ca28c85c0000f3/train/javascript
 *
 */

const scramble = (str, arr) =>
  arr
    .map((n, i) => [str[i], n])
    .sort(([, a], [, b]) => a - b)
    .map(([char]) => char)
    .join('')
