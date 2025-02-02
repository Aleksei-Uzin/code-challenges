/**
 * Character Counter
 * https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript
 *
 */

const validateWord = str => {
  let count = 0

  for (let c of str) {
    const reg = /\W/.test(c) ? `\\${c}` : c
    const seq = str.match(new RegExp(reg, 'gi'))

    if (!count) count = seq.length
    if (count !== seq.length) return false
  }

  return true
}
