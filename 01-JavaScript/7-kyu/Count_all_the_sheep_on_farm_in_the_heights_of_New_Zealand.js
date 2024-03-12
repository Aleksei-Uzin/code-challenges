/**
 * Count all the sheep on farm in the heights of New Zealand
 * https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010/train/javascript
 *
 */

const lostSheep = (friday, saturday, total) =>
  [...friday, ...saturday].reduce((acc, n) => acc - n, total)
