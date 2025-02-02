/**
 * Sum it continuously
 * https://www.codewars.com/kata/59b44d00bf10a439dd00006f/train/javascript
 *
 */

const add = arr =>
  arr.reduce((acc, n) => {
    const prev = +acc.slice(-1) ?? 0
    return [...acc, prev + n]
  }, [])

// B
const _add = arr => {
  const res = []

  for (let i = 0; i < arr.length; i++) {
    const prev = res[i - 1] ?? 0
    res.push(prev + arr[i])
  }

  return res
}
