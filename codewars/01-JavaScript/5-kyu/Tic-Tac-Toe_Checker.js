/**
 * Tic-Tac-Toe Checker
 * https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript
 *
 */

function isSolved(board) {
  const flatBoard = board.flat()
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let [a, b, c] of lines) {
    if (
      flatBoard[a] &&
      flatBoard[a] === flatBoard[b] &&
      flatBoard[a] === flatBoard[c]
    ) {
      return flatBoard[a]
    }
  }

  return flatBoard.every(Boolean) ? 0 : -1
}
