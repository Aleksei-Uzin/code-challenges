/**
 * Coding 3min : Regular expression compression
 * https://www.codewars.com/kata/570bae4b0237999e940016e9/train/javascript
 *
 */

const sc = regex =>
  regex.replace(/\/(\w+?)(\1+)\//, (currReg, set, tail) => {
    const setLen = set.length
    const newSet = setLen > 1 ? `(${set})` : set
    const num = Math.ceil((tail.length + 1) / setLen)
    const newReg = `/${newSet}{${num}}/`

    return newReg.length < currReg.length ? newReg : currReg
  })
