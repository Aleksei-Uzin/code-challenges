/**
 * UniDecoder
 * https://www.codewars.com/kata/57366eaae7f8d2df290003e8/train/javascript
 *
 */

// A
const uniDecoder = (...rest) =>
  rest.reduce(
    (acc, val) =>
      Number.isInteger(val) ? acc + String.fromCharCode(val) : acc,
    ''
  ) || 'not a valid character code'

// B
const _uniDecoder = (...rest) => {
  let res = ''

  for (let val of rest) {
    if (Number.isInteger(val)) res += String.fromCharCode(val)
  }

  return res || 'not a valid character code'
}
