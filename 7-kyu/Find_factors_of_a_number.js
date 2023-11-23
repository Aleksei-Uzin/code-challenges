/**
 * Find factors of a number
 * https://www.codewars.com/kata/564fa92d1639fbefae00009d/train/javascript
 *
 */

const factors = x => {
  if (x <= 0 || !Number.isInteger(x)) return -1

  const res = [x]
  let n = ~~(x / 2)

  while (n > 0) {
    if (x % n === 0) res.push(n)
    n--
  }

  return res
}
