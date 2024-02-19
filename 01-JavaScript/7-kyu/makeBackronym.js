/**
 * makeBackronym
 * https://www.codewars.com/kata/55805ab490c73741b7000064/train/javascript
 *
 */

//preload variable: dict
const makeBackronym = str =>
  str
    .toUpperCase()
    .replace(/\w/g, m => `${dict[m]} `)
    .trimEnd()
