/**
 * Vowel one
 * https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript
 *
 */

const vowelOne = str =>
  str.replace(/([aeiou])|([^\1])/gi, (match, p1) => (match === p1 ? 1 : 0))
