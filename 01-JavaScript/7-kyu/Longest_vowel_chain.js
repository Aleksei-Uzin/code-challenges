/**
 * Longest vowel chain
 * https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript
 *
 */

const solve = s => Math.max(...s.match(/[aeiou]+/g).map(val => val.length))
