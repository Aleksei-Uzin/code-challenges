/**
 * Get number from string
 * https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript
 *
 */

const getNumberFromString = str => Number(str.match(/\d/g).join(''))
