/**
 * The Hidden Word
 * https://www.codewars.com/kata/5906a218dfeb0dbb52000005/train/javascript
 *
 */

const hiddenWord = num =>
  [...num.toString()].reduce((acc, n) => `${acc}${'oblietadnm'[n]}`, '')
