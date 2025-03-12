/**
 * Reach Me and Sum my Digits
 * https://www.codewars.com/kata/55ffb44050558fdb200000a4/train/javascript
 *
 */

const sumDigNthTerm = (initVal, patternL, nthTerm) => {
  let sum = initVal

  for (let i = 0; i < nthTerm - 1; i++) {
    sum += patternL[i % patternL.length]
  }

  return [...`${sum}`].reduce((acc, n) => acc + parseInt(n), 0)
}
