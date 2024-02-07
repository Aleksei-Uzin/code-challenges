/**
 * Moves in squared strings (I)
 * https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript
 *
 */

const vertMirror = str => str.replace(/\w+/g, m => [...m].reverse().join(''))
const horMirror = str => str.split('\n').reverse().join('\n')
const oper = (fct, s) => fct(s)
