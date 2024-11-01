/**
 * Get row from alphabetical sequence
 * https://www.codewars.com/kata/5830195755f28edad4000081/train/javascript
 *
 */

const getRow = n => {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const c = n % 26 || 26
  const char = abc[c - 1]
  const reg = new RegExp(`\\w{${c}}`)

  return abc.replace(reg, char.repeat(c))
}
