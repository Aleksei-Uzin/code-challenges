/**
 * Simple Fun #261: Whose Move
 * https://www.codewars.com/kata/59126992f9f87fd31600009b/train/javascript
 *
 */

const whoseMove = (lastPlayer, win) => {
  if(lastPlayer === 'white') {
    return win ? 'white' : 'black'
  }

  return win ? 'black' : 'white'
}
