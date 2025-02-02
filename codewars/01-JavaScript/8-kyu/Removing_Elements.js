/**
 * Removing Elements
 * https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
 *
 */

function removeEveryOther(arr) {
  return arr.filter((_, i) => !(i % 2))
}
