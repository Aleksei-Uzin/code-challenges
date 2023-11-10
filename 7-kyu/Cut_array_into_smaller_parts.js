/**
 * Cut array into smaller parts
 * https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150/train/javascript
 *
 */

const makeParts = (arr, chunkSize) => {
  const res = []

  for (let i = 0; i < arr.length; i += chunkSize) {
    res.push(arr.slice(i, chunkSize + i))
  }

  return res
}
