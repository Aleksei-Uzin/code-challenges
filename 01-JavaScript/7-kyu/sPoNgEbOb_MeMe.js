/**
 * sPoNgEbOb MeMe
 * https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript
 *
 */

const spongeMeme = sentence =>
  sentence.replace(/./g, (m, i) => (i % 2 ? m.toLowerCase() : m.toUpperCase()))
