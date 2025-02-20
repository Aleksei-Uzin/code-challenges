/**
 * Sort two arrays
 * https://www.codewars.com/kata/5818c52e21a33314e00000cb/train/javascript
 *
 */

const sortArrays = (arr1, arr2) => {
  const pairs = arr1.map((n, i) => [n, arr2[i], i])

  pairs.sort((a, b) => a[1] - b[1] || a[2] - b[2])
  const sortedArr1 = pairs.map(pair => pair[0])

  pairs.sort((a, b) => a[0] - b[0] || a[2] - b[2])
  const sortedArr2 = pairs.map(pair => pair[1])

  return [sortedArr1, sortedArr2]
}
