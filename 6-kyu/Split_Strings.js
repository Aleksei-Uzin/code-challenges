/**
 * Split Strings
 * https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
 *
 */

const solution = str => {
  str = str.length % 2 === 0 ? str : `${str}_`

  return str.match(/.{2}/g) || []
}
