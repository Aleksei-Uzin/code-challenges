/**
 * Maximum Product
 * https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript
 *
 */

const adjacentElementsProduct = array => {
  let res = -Infinity

  array.forEach((x, i, arr) => {
    const prod = x * arr[i + 1]

    if (prod > res) res = prod
  })

  return res
}
