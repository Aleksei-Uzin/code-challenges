/**
 * flatten()
 * https://www.codewars.com/kata/513fa1d75e4297ba38000003/train/javascript
 *
 */

const flatten = (...args) => {
  const res = []

  for (let item of args) {
    if (Array.isArray(item)) res.push(...flatten(...item))
    else res.push(item)
  }

  return res
}
