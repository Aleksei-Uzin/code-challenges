/**
 * Is it a vowel on this position?
 * https://www.codewars.com/kata/5a2b7edcb6486a856e00005b/train/javascript
 *
 */

const checkVowel = (str, pos) => /[aeiou]/i.test(str[pos] ?? '')
