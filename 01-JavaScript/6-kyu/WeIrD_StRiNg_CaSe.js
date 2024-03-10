/**
 * WeIrD StRiNg CaSe
 * https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
 *
 */

const toWeirdCase = str =>
  str.replace(
    /(?:(\w)(\w)?)/g,
    (_, n1, n2 = '') => `${n1.toUpperCase()}${n2.toLowerCase()}`
  )
