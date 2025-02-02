/**
 * Start with a Vowel
 * https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167/train/javascript
 *
 */

const vowelStart = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s]|\s(?=[^aeiou]+)/g, '')
    .replace(/\B[aeiou]/g, ' $&')
