/**
 * Multidimensional array
 * https://www.codewars.com/kata/5a34e2eab6cfd7fcbc000008/train/javascript
 *
 */

const getElement = (array, indexes) => {
  let res = array.slice()

  for (let i of indexes) {
    res = res[i]
  }

  return res
}
