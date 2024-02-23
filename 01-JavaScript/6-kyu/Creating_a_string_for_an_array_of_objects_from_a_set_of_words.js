/**
 * Creating a string for an array of objects from a set of words
 * https://www.codewars.com/kata/5877786688976801ad000100/train/javascript
 *
 */

const wordsToObject = input => {
  const arr = input.match(/\S+\s\S+/g) || []
  const res = []

  for (let val of arr) {
    const [name, id] = val.split(' ')
    res.push(`{name : '${name}', id : '${id}'}`)
  }

  return `[${res.join(', ')}]`
}
