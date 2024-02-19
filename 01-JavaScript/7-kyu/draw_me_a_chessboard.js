/**
 * draw me a chessboard
 * https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript
 *
 */

const chessBoard = (rows, columns) => {
  const board = []

  for(let i = 0; i < rows; i++) {
    const line = []

    for(let k = 0; k < columns; k++) {
      (i + k) % 2 === 0 ? line.push('O') : line.push('X')
    }

    board.push(line)
  }

  return board
}
