/**
 * Tic-Tac-Toe
 * https://www.codewars.com/kata/5216a87cbf53a9c30f0000dc/train/javascript
 *
 */

const solveTTT = board => {
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
  const possibleLines = []
  let move = null

  outerLoop: for (let line of lines) {
    for (let ind of line) {
      if (board[ind].toLowerCase() === 'o') {
        continue outerLoop
      }
    }
    possibleLines.push(line)
  }

  if (possibleLines.length === 0) {
    move = board.indexOf('')
  } else {
    for (let line of possibleLines) {
      let emptySlots = 0

      for (let ind of line) {
        if (board[ind] === '') {
          emptySlots++
          move = ind
        }
      }

      if (emptySlots === 1) {
        break
      }
    }
  }

  return move
}
