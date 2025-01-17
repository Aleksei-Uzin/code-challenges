/**
 * T.T.T.35: Complete a matrix(3x3)
 * https://www.codewars.com/kata/57b13c47d241569e52001343/train/javascript
 *
 */

// TODO: complete the solution
const getKey = (r, c) => [`row-${r}`, `col-${c}`]

const calcSum = () => {
  const sum = {}

  return sum
}

const completeMatrix = matrix => {
  const len = matrix.length
  const mapNull = new Map()

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const val = matrix[i][j]

      if (val === null) {
        mapNull.set(getKey(i, j), val)
      } else {
      }
    }
  }

  return mapNull
}

var matrix = [
  [10, null, 3],
  [4, null, 16],
  [null, 12, null],
]

console.log(completeMatrix(matrix))
