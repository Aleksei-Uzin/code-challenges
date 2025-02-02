/**
 * Stop gninnipS My sdroW!
 * https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
 *
 */

const spinWords = str => str.replace(/\w{5,}/g, m => [...m].reverse().join(''))
