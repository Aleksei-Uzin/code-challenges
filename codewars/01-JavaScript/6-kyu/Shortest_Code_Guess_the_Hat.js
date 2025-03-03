/**
 * Shortest Code : Guess the Hat
 * https://www.codewars.com/kata/570e6d8576f0cde131000129/train/javascript
 *
 */

const sc = e =>
  e.reduce((i, s) => (!s.includes(i) ? i : s[0] === i ? s[2] : s[0]), '2')
