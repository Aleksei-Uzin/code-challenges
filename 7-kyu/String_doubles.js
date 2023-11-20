/**
 * String doubles
 * https://www.codewars.com/kata/5a145ab08ba9148dd6000094/train/javascript
 *
 */

const doubles = s => (/(\w)\1/g.test(s) ? doubles(s.replace(/(\w)\1/g, '')) : s)
