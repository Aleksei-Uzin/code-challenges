/**
 * Countdown - Longest Word
 * https://www.codewars.com/kata/57a4c85de298a795210002da/train/javascript
 *
 */

// words - preloaded array
const longestWord = letters => {
  const res = []
  let len = 0

  for (let word of words) {
    let tmpWord = word

    for (let l of letters) {
      tmpWord = tmpWord.replace(l, '')
    }

    if (tmpWord.length === 0) {
      res.push(word)
      len = Math.max(word.length, len)
    }
  }

  return res.length ? res.filter(w => w.length === len) : null
}
