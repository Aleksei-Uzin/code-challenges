/**
 * Name to Matrix
 * https://www.codewars.com/kata/5a91e0793e9156ccb0003f6e/train/javascript
 *
 */

const matrixfy = str => {
  const len = Math.ceil(Math.sqrt(str.length))
  const matrix = []

  for (let i = 0; i < len; i++) {
    const temp = []

    for (let j = 0; j < len; j++) {
      temp[j] = str[i * len + j] || '.'
    }

    matrix.push(temp)
  }

  return matrix.length ? matrix : 'name must be at least one letter'
}
