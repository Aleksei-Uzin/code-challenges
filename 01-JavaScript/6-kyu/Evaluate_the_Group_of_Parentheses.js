/**
 * Evaluate the Group of Parentheses
 * https://www.codewars.com/kata/64b6722493f1050058dc3f98/train/javascript
 *
 */

const evalParentheses = parens => {
  const reg = /\((_\d+)+\)/g
  let str = parens.replace(/\(\)/g, '_1')

  while (reg.test(str)) {
    str = str
      .replace(/\(_?(\d+)\)/g, (_, n) => `_${n * 2}`)
      .replace(reg, m => `(_${calcSum(m)})`)
  }

  return calcSum(str)
}
const calcSum = str =>
  (str.match(/\d+/g) || []).reduce((acc, n) => acc + Number(n), 0)
