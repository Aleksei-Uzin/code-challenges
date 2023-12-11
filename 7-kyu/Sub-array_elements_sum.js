/**
 * Sub-array elements sum
 * https://www.codewars.com/kata/5b5e0ef007a26632c400002a/train/javascript
 *
 */

const elementsSum = (arr, d = 0) => {
  let len = arr.length

  return arr.reduce((acc, val) => {
    const item = val[--len] ?? d

    return acc + item
  }, 0)
}
