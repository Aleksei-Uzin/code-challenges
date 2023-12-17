/**
 * Ranking System
 * https://www.codewars.com/kata/58e16de3a312d34d000000bd/train/javascript
 *
 */

const rankings = arr => {
  const sortedArr = arr.slice().sort((a, b) => b - a)

  return arr.map(val => sortedArr.indexOf(val) + 1)
}
