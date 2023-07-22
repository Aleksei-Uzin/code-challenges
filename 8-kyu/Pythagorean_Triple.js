/**
 * Pythagorean Triple
 * https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript
 *
 */

const pipe =
  (...funcs) =>
  value =>
    funcs.reduce((accum, fn) => fn(accum), value)

const checkSides = arr => ({
  hypo: Math.max(...arr),
  sides: arr.filter(n => n !== Math.max(...arr)),
})
const getSquares = obj => ({
  hypoSquare: obj.hypo ** 2,
  sumOfSquares: obj.sides.map(side => side ** 2).reduce((a, b) => a + b),
})
const compareResults = obj => obj.hypoSquare === obj.sumOfSquares

const isPythagoreanTriple = integers => pipe(checkSides, getSquares, compareResults)(integers)
