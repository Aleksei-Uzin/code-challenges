/**
 * Power
 * https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript
 *
 */

const numberToPower = (num, pow) => new Array(pow).fill(num).reduce((a, b) => a * b, 1)
