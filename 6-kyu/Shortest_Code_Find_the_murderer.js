/**
 * Shortest Code : Find the murderer
 * https://www.codewars.com/kata/570e8d5693214b0095001b08/train/javascript
 *
 */

let sc = (s, susp) =>
  susp
    .filter(n => new RegExp('^' + s.replace(/~/g, '.'), 'i').test(n))
    .join(',')
