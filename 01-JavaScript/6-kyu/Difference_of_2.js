/**
 * Difference of 2
 * https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript
 *
 */

const twosDifference = input => {
  const len = input.length
  const res = []

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const n1 = input[i]
      const n2 = input[j]

      if (n1 - n2 === 2) res.push([n2, n1])
      else if (n1 - n2 === -2) res.push([n1, n2])
    }
  }

  return res.sort(([a1, a2], [b1, b2]) => a1 + a2 - (b1 + b2))
}
