/**
 * Sort an array by value and index
 * https://www.codewars.com/kata/58e0cb3634a3027180000040/train/javascript
 *
 */

const sortByValueAndIndex = arr =>
  arr
    .map((val, i) => [val * (i + 1), val])
    .sort(([a], [b]) => a - b)
    .map(([, val]) => val)

const palindrome = (n, c) => {
  return c.repeat(n - c.length + 1)
}
