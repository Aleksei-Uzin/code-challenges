/**
 * Tricky Doubles
 * https://www.codewars.com/kata/56971747aa359bdbf800004d/train/javascript
 *
 */

const trickyDoubles = n => (/^(\d+)\1$/.test(n.toString()) ? n : n * 2)
