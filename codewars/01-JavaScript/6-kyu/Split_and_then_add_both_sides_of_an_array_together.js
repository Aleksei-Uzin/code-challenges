/**
 * Split and then add both sides of an array together.
 * https://www.codewars.com/kata/5946a0a64a2c5b596500019a/train/javascript
 *
 */

const splitAndAdd = (arr, n) => {
  if (!n) return arr

  const len = arr.length
  const mid = ~~(len / 2)
  const newArr = arr.slice(mid).reduce((acc, n, i) => {
    if (len % 2) {
      const sum = i > 0 ? n + arr[i - 1] : n
      acc.push(sum)
    } else {
      acc.push(n + arr[i])
    }
    return acc
  }, [])

  return splitAndAdd(newArr, n - 1)
}
