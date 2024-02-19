/**
 * Even odd disparity
 * https://www.codewars.com/kata/59c62f1bdcc40560a2000060/train/javascript
 *
 */

const solve = arr =>
  arr
    .filter(x => typeof x === 'number')
    .reduce((acc, val) => val % 2 ? acc -= 1 : acc += 1, 0)
