/**
 * Reverse words
 * https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
 *
 */

const reversedStr = str => str.split('').reverse().join('')
const reverseWords = str =>
  str.split(' ')
    .map(reversedStr)
    .join(' ')

