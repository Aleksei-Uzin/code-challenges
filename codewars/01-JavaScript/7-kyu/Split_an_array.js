/**
 * Split an array
 * https://www.codewars.com/kata/550aea365951383698000727/train/javascript
 *
 */

const split = (arr, prop) =>
  arr.reduce(
    (res, obj) => (obj[prop] ? res[0].push(obj) : res[1].push(obj), res),
    [[], []]
  )
