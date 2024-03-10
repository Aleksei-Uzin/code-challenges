/**
 * RuplesJS #2: String Delete
 * https://www.codewars.com/kata/567c63c365ee000c5f000007/train/javascript
 *
 */

String.prototype.delete = function (...args) {
  let res = this

  for (let val of args) {
    if (typeof val === 'string') res = res.replace(new RegExp(val, 'g'), '')
    if (val instanceof RegExp) res = res.replace(val, '')
  }

  return res.slice()
}
