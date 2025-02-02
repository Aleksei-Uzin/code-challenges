/**
 * Rock Paper Scissors Lizard Spock
 * https://www.codewars.com/kata/57d29ccda56edb4187000052/train/javascript
 *
 */

const rpsls = (pl1, pl2) => {
  const rules = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
  }

  let winner = 0

  if (rules[pl1].includes(pl2)) winner = 1
  if (rules[pl2].includes(pl1)) winner = 2

  return winner ? `Player ${winner} Won!` : 'Draw!'
}
