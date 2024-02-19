/**
 * Determine if the poker hand is flush
 * https://www.codewars.com/kata/5acbc3b3481ebb23a400007d/train/javascript
 *
 */

const isFlush = cards => {
  for (let i = 0; i < cards.length - 1; i++) {
    if (cards[i].slice(-1) !== cards[i + 1].slice(-1)) return false
  }

  return true
}
