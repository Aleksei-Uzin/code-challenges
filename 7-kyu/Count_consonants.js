/**
 * Count consonants
 * https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript
 *
 */

const consonantCount = str =>
  str
    .toLowerCase()
    .split('')
    .filter(val => /[a-z]/.test(val))
    .filter(val => !['a', 'e', 'i', 'o', 'u'].includes(val))
    .length
