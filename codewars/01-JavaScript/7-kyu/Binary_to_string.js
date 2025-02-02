/**
 * Binary to string
 * https://www.codewars.com/kata/5ab3495595df9ec78f0000b4/train/javascript
 *
 */

const binaryToString = binary =>
  binary
    .split('0b')
    .map((val, i) => (i > 0 ? String.fromCharCode(parseInt(val, 2)) : ''))
    .join('')

// Best practice
//
// const binaryToString = binary => String.fromCharCode(...binary.split(/(?=0b)/))
