/**
 * Swap two elements
 * https://www.codewars.com/kata/5a3f4eace1ce0eeda600003d/train/javascript
 *
 */

const swapTwo = (arr, a, b) => {
  const copy = arr.slice()

  copy[arr.indexOf(a)] = b
  copy[arr.lastIndexOf(b)] = a

  return copy
}
