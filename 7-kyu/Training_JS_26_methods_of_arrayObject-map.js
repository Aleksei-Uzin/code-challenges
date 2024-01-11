/**
 * Training JS #26: methods of arrayObject---map()
 * https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript
 *
 */

const isolateIt = arr =>
  arr.map(val => {
    const len = val.length

    return `${val.slice(0, len / 2)}|${val.slice(len / 2 + (len % 2))}`
  })
