/**
 * Sum of differences in array
 * https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
 *
 */

function sumOfDifferences(arr) {
  const compareNum = (a, b) => b - a
  const descendingArr = arr.sort(compareNum)
  let res = 0

  descendingArr.forEach((x, i, arr) => {
    if(i > 0) res -= x - arr[i - 1]
  })

  return res
}

// Best Practice
//
// const sumOfDifferences = arr => arr
//   .sort((a, b) => b - a)
//   .map((a, i) => a - arr[i + 1] || 0)
//   .reduce((a, b) => a + b, 0)
