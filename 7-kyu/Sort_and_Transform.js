/**
 * Sort and Transform
 * https://www.codewars.com/kata/57cc847e58a06b1492000264/train/javascript
 *
 */

const getItems = a => a.slice(0, 2).concat(a.slice(-2))
const sortTransform = a => {
  const str1 = String.fromCharCode(...getItems(a))
  const str2 = String.fromCharCode(...getItems(a.sort((a, b) => a - b)))
  const str3 = String.fromCharCode(...getItems(a.sort((a, b) => b - a)))

  return `${str1}-${str2}-${str3}-${str2}`
}
