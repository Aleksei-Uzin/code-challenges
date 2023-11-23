/**
 * Sorted Union
 * https://www.codewars.com/kata/5729c30961cecadc4f001878/train/javascript
 *
 */

const uniteUnique = (...rest) => [...new Set([].concat(...rest))]
