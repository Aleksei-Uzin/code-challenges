/**
 * Prefill an Array
 * https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
 *
 */

const prefill = (n, v) => {
  if (!Number.isInteger(+n.toString()) || n < 0)
    throw new TypeError(`${n} is invalid`)

  return n !== 0 ? Array.from({ length: n }).fill(v) : []
}
