/**
 * reverseIt
 * https://www.codewars.com/kata/557a2c136b19113912000010/train/javascript
 *
 */

const reverseIt = data => {
  switch (typeof data) {
    case 'string':
      return [...data].reverse().join('')
    case 'number':
      return +[...`${data}`].reverse().join('')
    default:
      return data
  }
}
