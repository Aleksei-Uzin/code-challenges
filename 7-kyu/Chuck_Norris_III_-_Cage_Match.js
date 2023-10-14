/**
 * Chuck Norris III - Cage Match
 * https://www.codewars.com/kata/57061b6fcb7293901a000ac7/train/javascript
 *
 */

const headSmash = arr => {
  if (arr.length === 0) return 'Gym is empty'
  if (typeof arr === 'number') return "This isn't the gym!!"

  return arr.map(val => val.replace(/O/g, ' '))
}
