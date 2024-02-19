/**
 * Checkered Board
 * https://www.codewars.com/kata/5650f1a6075b3284120000c0/train/javascript
 *
 */

const checkeredBoard = dimension => {
  const isDarkFirst = dimension % 2 === 0
  const square1 = isDarkFirst ? '\u25A1' : '\u25A0'
  const square2 = isDarkFirst ? '\u25A0' : '\u25A1'
  let board = []

  for(let i = 0; i < dimension; i++) {
    let line = []

    for(let k = 0; k < dimension; k++) {
      (i + k) % 2 === 0 ? line.push(square1) : line.push(square2)
    }

    board.push(line.join(' '))
  }

  return board.join('\n')
}
