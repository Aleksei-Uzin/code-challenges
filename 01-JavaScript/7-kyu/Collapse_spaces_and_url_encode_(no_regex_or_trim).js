/**
 * Collapse spaces and url encode (no regex or trim)
 * https://www.codewars.com/kata/57f6a6050812b4198d0001a5/train/javascript
 *
 */

const urlify = str => {
  let res = ''

  for (let val of str) {
    if (/^\s|%20\s/.test(`${res}${val}`)) continue
    res += /\s/.test(val) ? '%20' : val
  }

  return /%20$/.test(res) ? res.slice(0, -3) : res
}
