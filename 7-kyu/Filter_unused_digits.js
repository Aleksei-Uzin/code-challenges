/**
 * Filter unused digits
 * https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript
 *
 */

const unusedDigits = (...arr) => {
  const str = arr.join('')
  let res = '0123456789'

  for (let n of str) {
    res = res.replace(n, '')
  }

  return res
}
