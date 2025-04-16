/**
 * Sort rectangles and circles by area II
 * https://www.codewars.com/kata/5a1ebc2480171f29cf0000e5/train/javascript
 *
 */

const getArea = shape => {
  const res = Array.isArray(shape)
    ? shape[0] * shape[1]
    : Math.PI * Math.pow(shape, 2)
  return Math.round(res * 100) / 100
}
const sortByArea = arr => [...arr].sort((a, b) => getArea(a) - getArea(b))
