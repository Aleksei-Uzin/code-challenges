/**
 * Lorraine Wants to Win the TV Contest
 * https://www.codewars.com/kata/562dbaf65d4ab6685c0000ed/train/javascript
 *
 */

// wordList is preloaded
const unscramble = scramble =>
  wordList.filter(word => {
    if (word.length !== scramble.length) return false

    for (let c of scramble) {
      word = word.replace(c, '')
    }

    return word === ''
  })
