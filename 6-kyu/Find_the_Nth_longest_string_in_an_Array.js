/**
 * Find the Nth longest string in an Array
 * https://www.codewars.com/kata/5594c4599934000e1e00002e/train/javascript
 *
 */

const longest = (arr, n) => {
  const copy = arr.slice()

  return arr.sort(
    (a, b) => b.length - a.length || copy.indexOf(a) - copy.indexOf(b)
  )[n - 1]
}
