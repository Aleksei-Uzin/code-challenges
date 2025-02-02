/**
 * Find Count of Most Frequent Item in an Array
 * https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript
 *
 */

const mostFrequentItemCount = collection => {
  const obj = {}

  collection.forEach(val => {
    !obj[val] ? (obj[val] = 1) : (obj[val] += 1)
  })

  return Math.max(0, ...Object.values(obj))
}
