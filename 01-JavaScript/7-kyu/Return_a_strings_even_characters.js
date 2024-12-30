/**
 * Return a string's even characters
 * https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript
 *
 */

const evenChars = str =>
  /^.{2,100}$/.test(str) ? [...str].filter((_, i) => i % 2) : 'invalid string'
