/**
 * Define a card suit
 * https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
 *
 */

const defineSuit = card => {
  switch(card.slice(-1)) {
    case '♣': return 'clubs'
    case '♦': return 'diamonds'
    case '♥': return 'hearts'
    default: return 'spades'
  }
}
