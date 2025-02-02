/**
 * Regexp basics - parsing integers
 * https://www.codewars.com/kata/5682e1082cc7862db5000039/train/javascript
 *
 */

String.prototype.toInteger = function () {
  if (!/^(\+|\-)?(\d+|0b[01]+|0x[a-fA-F\d]+|0o[0-7]+)$/.test(this)) return null

  const [, sign, prefix, num] = /^(\+|\-)?(0[box])?(.+)/.exec(this)
  let res = null

  if (prefix === '0b') res = parseInt(num, 2)
  else if (prefix === '0o') res = parseInt(num, 8)
  else if (prefix === '0x') res = parseInt(num, 16)
  else res = +num

  return sign === '-' ? res * -1 : res
}
