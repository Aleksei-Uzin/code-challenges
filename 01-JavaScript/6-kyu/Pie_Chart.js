/**
 * Pie Chart
 * https://www.codewars.com/kata/59006675bb1fb31ae400012b/train/javascript
 *
 */

const pieChart = str => {
  const obj = JSON.parse(str)
  const keys = Object.keys(obj)
  const sum = keys.reduce((acc, key) => acc + obj[key], 0)
  const angle = 360 / sum

  for (let key of keys) {
    obj[key] *= angle
  }

  return JSON.stringify(obj)
}
