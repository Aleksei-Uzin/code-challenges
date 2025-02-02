/**
 * Count strings in objects
 * https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript
 *
 */

const strCount = obj => {
  const keys = Object.keys(obj)
  let res = 0

  for (let val of keys) {
    if (obj[val] instanceof Object) res += strCount(obj[val])
    if (typeof obj[val] === 'string') res++
  }

  return res
}
