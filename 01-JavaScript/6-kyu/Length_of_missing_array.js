/**
 * Length of missing array
 * https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript
 *
 */

const getLengthOfMissingArray = arrayOfArrays => {
  if (!Array.isArray(arrayOfArrays)) return 0

  const arr = arrayOfArrays
    .map(arr => (arr ? arr.length : 0))
    .sort((a, b) => a - b)

  if (arr.includes(0)) return 0

  let res = 0

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      res = arr[i] + 1
      break
    }
  }

  return res
}
