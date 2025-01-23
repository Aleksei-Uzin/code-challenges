/**
 * Exclamation marks series #8: Move all exclamation marks to the end of the sentence
 * https://www.codewars.com/kata/57fafd0ed80daac48800019f/train/javascript
 *
 */

const remove = (str, n = 0) =>
  str.replace(/!/g, _ => (n++, '')).replace(/.$/, m => `${m}${'!'.repeat(n)}`)
