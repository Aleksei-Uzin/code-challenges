/**
 * Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
 * https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript
 *
 */

const remove = str =>
  str
    .split(' ')
    .filter(val => (val.match(/!/g) || []).length !== 1)
    .join(' ')
