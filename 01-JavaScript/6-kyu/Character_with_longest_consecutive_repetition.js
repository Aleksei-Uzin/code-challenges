/**
 * Character with longest consecutive repetition
 * https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript
 *
 */

const longestRepetition = str => {
  const arr = str.match(/(\w)\1+/g)
  let [char, len] = ['', 0]

  if (!str) return [char, len]
  if (!arr) return [str.slice(0, 1), 1]

  arr.forEach(val => {
    if (val.length > len) {
      char = val.slice(0, 1)
      len = val.length
    }
  })

  return [char, len]
}
