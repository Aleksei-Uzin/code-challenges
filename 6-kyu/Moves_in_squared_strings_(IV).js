/**
 * Moves in squared strings (IV)
 * https://www.codewars.com/kata/56dbf59b0a10feb08c000227/train/javascript
 *
 */

const diag2Sym = arr =>
  rot90Counter(arr).map(val => [...val].reverse().join(''))

const rot90Counter = arr =>
  arr.map((val, i) => val.replace(/./g, (m, k) => arr[k][i])).reverse()

const selfieDiag2Counterclock = arr => {
  const diagSym = diag2Sym(arr)
  const rot = rot90Counter(arr)
  return arr.map((val, i) => `${val}|${diagSym[i]}|${rot[i]}`)
}
const oper = (fct, s) => fct(s.split('\n')).join('\n')
