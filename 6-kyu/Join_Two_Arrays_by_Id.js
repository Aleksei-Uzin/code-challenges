/**
 * Join Two Arrays by Id
 * https://www.codewars.com/kata/6481c68ffdf80b6147d85248/train/javascript
 *
 */

// A
const joinArraysById = (arr1, arr2) => {
  const compare = (a, b) => a.id - b.id

  const assign = (obj, i, arr) => {
    if (obj.id === arr[i + 1]?.id) {
      obj = { ...obj, ...arr[i + 1] }
      delete arr[i + 1]
    }

    return obj
  }

  return [...arr1, ...arr2].sort(compare).map(assign).filter(Boolean)
}

// B
const _joinArraysById = (arr1, arr2) =>
  [...arr1, ...arr2]
    .sort((a, b) => a.id - b.id)
    .map((x, i, arr) => {
      if (x.id === arr[i + 1]?.id) {
        x = Object.assign(x, arr[i + 1])
        delete arr[i + 1]
      }

      return x
    })
    .filter(Boolean)
