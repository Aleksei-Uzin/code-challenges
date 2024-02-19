/**
 * Shortest Word
 * https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
 *
 */

const findShort = str => {
  const words = str.split(' ').sort((a, b) => a.length - b.length)

  return words[0].length
}

// Best Practice
//
// function findShort(s){
//   return Math.min.apply(null, s.split(' ').map(w => w.length))
// }
