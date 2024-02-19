/**
 * Double Trouble
 * https://www.codewars.com/kata/57f7796697d62fc93d0001b8/train/javascript
 *
 */

const trouble = (x, t) => {
  return x.reduce(
    (acc, val) =>
      acc[acc.length - 1] + val !== t ? (acc.push(val), acc) : acc,
    []
  )
}
