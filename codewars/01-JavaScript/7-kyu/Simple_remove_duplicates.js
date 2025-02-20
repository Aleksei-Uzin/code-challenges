/**
 * Simple remove duplicates
 * https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript
 *
 */

// A
const solve = arr => {
  const res = []

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!res.includes(arr[i])) res.unshift(arr[i])
  }

  return res
}

// B
const _solve = arr => {
  const res = []

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i]
    const ind = arr.lastIndexOf(val)
    if (i === ind) res.push(val)
  }

  return res
}
