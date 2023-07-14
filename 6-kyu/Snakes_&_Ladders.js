/**
 * Snakes & Ladders
 * https://www.codewars.com/kata/5821cd4770ca285b1f0001d5/train/javascript
 *
 */

const snakesAndLadders = (board, dice) => {
  const boardLen = board.length - 1
  let res = 0

  dice.forEach(x => {
    if(res + x > boardLen || res === boardLen) return

    res += board[res + x] + x
  })
    
  return res
}
