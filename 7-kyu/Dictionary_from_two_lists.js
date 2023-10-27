/**
 * Dictionary from two lists
 * https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript
 *
 */

const createDict = (keys, values) => {
  const obj = {}

  keys.forEach((key, i) => {
    obj[key] = values[i] ?? null
  })

  return obj
}
