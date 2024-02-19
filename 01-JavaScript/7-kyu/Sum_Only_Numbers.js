/**
 * Sum Only Numbers
 * https://www.codewars.com/kata/5aecf05745e36b3788000557/train/javascript
 *
 */

const sumNumbers = (...args) =>
  args.reduce((acc, val) => {
    if (typeof val === 'number') acc += val
    return acc
  }, 0)
