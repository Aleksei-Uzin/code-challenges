/**
 * Head, Tail, Init and Last
 * https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/javascript
 *
 */

const head = arr => arr.slice().shift()
const tail = arr => arr.slice(1)
const init = arr => arr.slice(0, -1)
const last = arr => arr.slice().pop()
