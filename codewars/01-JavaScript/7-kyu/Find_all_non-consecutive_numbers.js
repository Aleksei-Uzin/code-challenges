/**
 * Find all non-consecutive numbers
 * https://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/javascript
 *
 */

const allNonConsecutive = arr => {
  const res = []

  for (let i = 1; i < arr.length; i++) {
    const n = arr[i]

    if (arr[i - 1] + 1 !== n) res.push({ i, n })
  }

  return res
}
