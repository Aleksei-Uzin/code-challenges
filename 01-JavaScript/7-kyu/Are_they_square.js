/**
 * Are they square?
 * https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript
 *
 */

const isSquare = arr => arr.length ? arr.every(n => Number.isInteger(Math.sqrt(n))) : undefined
