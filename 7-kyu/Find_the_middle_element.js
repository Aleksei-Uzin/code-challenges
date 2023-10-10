/**
 * Find the middle element
 * https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
 *
 */

const gimme = triplet => {
  const max = Math.max(...triplet)
  const min = Math.min(...triplet)

  return triplet.findIndex(n => n > min && n < max)
}
