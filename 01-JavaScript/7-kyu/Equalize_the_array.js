/**
 * Equalize the array!
 * https://www.codewars.com/kata/580a1a4af195dbc9ed00006c/train/javascript
 *
 */

const equalize = arr => {
  const first = arr[0]

  return arr.map(n => {
    const res = n - first
    return res < 0 ? res.toString() : `+${res}`
  })
}
