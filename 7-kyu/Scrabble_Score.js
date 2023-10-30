/**
 * Scrabble Score
 * https://www.codewars.com/kata/558fa34727c2d274c10000ae/train/javascript
 *
 */

// $dict - preloaded object
const scrabbleScore = str => {
  let sum = 0

  for (let c of str) sum += $dict[c.toUpperCase()] ?? 0

  return sum
}
