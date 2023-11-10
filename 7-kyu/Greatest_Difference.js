/**
 * Greatest Difference
 * https://www.codewars.com/kata/56b12e3ad2387de332000041/train/javascript
 *
 */

const diff = arr => {
  const range = arr.map(val => {
    const [a, b] = val.split('-').map(Number)

    return Math.abs(a - b)
  })
  const max = Math.max(...range)

  return max > 0 ? arr[range.indexOf(max)] : false
}
