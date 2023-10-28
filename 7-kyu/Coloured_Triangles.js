/**
 * Coloured Triangles
 * https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript
 *
 */

const getColor = row =>
  !/([RGB])\1/.test(row)
    ? row
        .replace(/[^R]{2}/, 'R')
        .replace(/[^G]{2}/, 'G')
        .replace(/[^B]{2}/, 'B')
    : row.slice(0, 1)

const triangle = row => {
  if (row.length === 1) return row

  let newRow = ''

  for (let i = 0; i < row.length - 1; i++) {
    newRow += getColor(row.slice(i, i + 2))
  }

  return triangle(newRow)
}
