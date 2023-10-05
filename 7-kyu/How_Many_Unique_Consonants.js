/**
 * How Many Unique Consonants?
 * https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript
 *
 */

const countConsonants = str =>
  new Set(str.toLowerCase().match(/[^aeiou|\W|\d]/g)).size
