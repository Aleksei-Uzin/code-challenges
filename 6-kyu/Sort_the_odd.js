/**
 * Sort the odd
 * https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
 *
 */

const sortArray = arr => {
  const sortedOdd = arr.filter(n => n % 2).sort((a, b) => a - b)

  return arr.map(x => x % 2 ? sortedOdd.shift() : x)
}
