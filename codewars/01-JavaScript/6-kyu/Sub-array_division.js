/**
 * Sub-array division
 * https://www.codewars.com/kata/59eb64cba954273cd4000099/train/javascript
 *
 */

const solve = (arr, n) => {
  const remainders = new Set([0])

  for (const num of arr) {
    const numRem = num % n

    if (numRem === 0) return true

    for (const rem of [...remainders]) {
      const newRem = (numRem + rem) % n

      if (newRem === 0) return true

      remainders.add(newRem)
    }
  }

  return false
}
