/**
 * Find missing numbers
 * https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb/train/javascript
 *
 */

const findMissingNumbers = arr => {
  const res = []

  for (let i = 0; i < arr.length - 1; i++) {
    const a = arr[i]
    const b = arr[i + 1]

    if (Math.abs(a - b) !== 1) {
      for (let j = a + 1; j < b; j++) {
        res.push(j)
      }
    }
  }

  return res
}
