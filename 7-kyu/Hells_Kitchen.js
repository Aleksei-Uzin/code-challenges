/**
 * Hells Kitchen
 * https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript
 *
 */

const gordon = a =>
  a
    .toUpperCase()
    .replace(/\w\b/g, '$&!!!!')
    .replace(/[aeiou]/gi, m => (/a/i.test(m) ? '@' : '*'))
