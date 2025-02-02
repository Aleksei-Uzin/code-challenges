/**
 * Empty that array!
 * https://www.codewars.com/kata/58e3ffb01f878507e00005b0/train/javascript
 *
 */

const empty = array => (array.splice(0, array.length), array)
const _empty = array => ((array.length = 0), array)
