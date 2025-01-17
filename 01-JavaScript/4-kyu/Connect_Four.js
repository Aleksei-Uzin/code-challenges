/**
 * Connect Four
 * https://www.codewars.com/kata/56882731514ec3ec3d000009/train/javascript
 *
 */

// TODO: complete the solution
const whoIsWinner = piecesPositionList => {
  const board = Array.from({length: 7}, () => Array.from({length: 7}, () => ' '))
  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

  const move = (col, color) => {
    const colInd = abc.findIndex(l => l === col.toLowerCase())
    
    for(let i = 6; i > 0; i--) {
      if(board[i][colInd] === ' ') {
        board[i][colInd] = color[0]
        break
      }
    }
  }

  const checkRow = (arr) => {
    return  arr.join('')
  }

  const calcWinner = color => {
    const rotated = board[0].map((val, index) => board.map(row => row[index]).reverse())

    for(let i = 0; i < )
  }

  for(let pos of piecesPositionList) {
    const [col, color] = pos.split('_')

    move(col, color)
    calcWinner(color)
  }

  return board.join('\n')
}

console.log(
  whoIsWinner([
      "A_Yellow",
      "B_Red",
      "B_Yellow",
      "C_Red",
      "G_Yellow",
      "C_Red",
      "C_Yellow",
      "D_Red",
      "G_Yellow",
      "D_Red",
      "G_Yellow",
      "D_Red",
      "F_Yellow",
      "E_Red",
      "D_Yellow"
    ]
  )
)
