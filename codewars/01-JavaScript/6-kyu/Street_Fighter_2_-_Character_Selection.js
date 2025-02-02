/**
 * Street Fighter 2 - Character Selection
 * https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/javascript
 *
 */

const streetFighterSelection = (fighters, [y, x], moves) => {
  const res = []

  for (let move of moves) {
    if (move === 'up') y = y > 0 ? y - 1 : 0
    if (move === 'down') y = y < 1 ? y + 1 : 1
    if (move === 'left') x = x > 0 ? x - 1 : 5
    if (move === 'right') x = x < 5 ? x + 1 : 0

    res.push(fighters[y][x])
  }

  return res
}
