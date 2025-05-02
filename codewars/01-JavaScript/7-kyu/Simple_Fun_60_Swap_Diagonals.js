/**
 * Simple Fun #60: Swap Diagonals
 * https://www.codewars.com/kata/5889a8b335de69cc620000c8/train/javascript
 *
 */

const swapDiagonals = matrix => {
  const len = matrix.length

  for (let i = 0; i < len; i++) {
    const temp = matrix[i][i]
    matrix[i][i] = matrix[i][len - i - 1]
    matrix[i][len - i - 1] = temp
  }

  return matrix
}
