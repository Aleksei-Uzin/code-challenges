/**
 * Simple CSS selector comparison
 * https://www.codewars.com/kata/5379fdfad08fab63c6000a63/train/javascript
 *
 */

const compare = (a, b) => {
  const [a1, a2, a3] = sum(a)
  const [b1, b2, b3] = sum(b)

  if (a1 > b1) return a
  else if (a1 < b1) return b

  if (a2 > b2) return a
  else if (a2 < b2) return b

  if (a3 > b3) return a
  else if (a3 < b3) return b

  return b
}

function sum(str) {
  const arr = str.match(/(\.|#)?\w+/g) || []

  return arr.reduce(
    (acc, val) => {
      if (val.includes('#')) acc[0] += 1
      else if (val.includes('.')) acc[1] += 1
      else acc[2] += 1

      return acc
    },
    [0, 0, 0]
  )
}
