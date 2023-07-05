/**
 * Training JS #29: methods of arrayObject---concat() and join()
 * https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
 *
 */

const concat = arr => [].concat(...arr)
const sort = arr => arr.sort((a, b) => b - a)
const join = arr => arr.join('>')

const pipe =
  (...fns) =>
  value =>
    fns.reduce((accum, fn) => fn(accum), value)

const bigToSmall = arr => pipe(concat, sort, join)(arr)
