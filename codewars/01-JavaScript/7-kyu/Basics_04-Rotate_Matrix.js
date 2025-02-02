/**
 * Basics 04: Rotate Matrix
 * https://www.codewars.com/kata/56b5dd1702a30326ce000b02/train/javascript
 *
 */

// Solution A
const rotateMatrix = matrix => {
  const n = matrix[0].length
  const res = []

  for (let i = 0; i < n; i++) {
    res.push(matrix.map(row => row[n - i - 1]))
  }

  return res
}

// Solution B
//
// const rotateMatrix = matrix => {
//   const m = matrix.length
//   const n = matrix[0].length
//   const res = []

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       const item = matrix[i][j]
//       Array.isArray(res[j]) ? res[j].push(item) : (res[j] = [item])
//     }
//   }

//   return res.reverse()
// }
