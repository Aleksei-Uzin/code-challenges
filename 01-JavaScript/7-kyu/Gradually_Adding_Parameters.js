/**
 * Gradually Adding Parameters
 * https://www.codewars.com/kata/555b73a81a6285b6ce000047/train/javascript
 *
 */

const add = (...arr) => Math.round(arr.reduce((acc, val, i) => acc + val * (i + 1), 0))
