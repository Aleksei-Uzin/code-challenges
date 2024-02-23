/**
 * Shorten your speech
 * https://www.codewars.com/kata/5b5b12e705f04b3a740000d0/train/javascript
 *
 */

const shortenSpeech = str =>
  str.replace(/([a-z']{3}[^aeiou\s]*)([aeiou][a-z,']*)/gi, '$1.')
