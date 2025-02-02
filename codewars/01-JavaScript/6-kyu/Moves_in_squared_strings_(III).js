/**
 * Moves in squared strings (III)
 * https://www.codewars.com/kata/56dbeec613c2f63be4000be6/train/javascript?collection=squared-strings
 *
 */

const diag1Sym = str => {
  const arr = str.split('\n')
  const len = arr[0].length
  let res = []

  for (let i = 0; i < len; i++) {
    let part = ''

    for (let s of arr) {
      part += s[i]
    }

    res.push(part)
  }

  return res
}
const rot90Clock = str => diag1Sym(str).map(val => [...val].reverse().join(''))
const selfieAndDiag1 = str => {
  const arr = diag1Sym(str)

  return str.match(/\w+/g).map((val, i) => `${val}|${arr[i]}`)
}
const oper = (fct, s) => fct(s).join('\n')
