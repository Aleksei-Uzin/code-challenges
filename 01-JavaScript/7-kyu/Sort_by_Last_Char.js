/**
 * Sort by Last Char
 * https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript
 *
 */

const last = str =>
  str.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
