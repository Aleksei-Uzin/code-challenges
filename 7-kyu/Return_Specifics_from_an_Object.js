/**
 * Return Specifics from an Object.
 * https://www.codewars.com/kata/5508b1d298b3238397000a56/train/javascript
 *
 */

const returnSpecifics = obj => {
  const keys = Object.keys(obj)

  if (keys.length === 0) return ['The Object is Empty']

  const nums = []
  const fns = []

  for (let key of keys) {
    const val = obj[key]
    const type = typeof val

    if (type === 'number') nums.push(val)
    if (type === 'function') fns.push(key)
  }

  return nums.concat(fns)
}
