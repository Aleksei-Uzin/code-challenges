/**
 * Mispelled word
 * https://www.codewars.com/kata/5892595f190ca40ad0000095/train/javascript
 *
 */

const mispelled = (word1, word2) => {
  const len1 = word1.length
  const len2 = word2.length

  if (Math.abs(len1 - len2) > 1) return false
  if (word1 === word2 || word1.includes(word2) || word2.includes(word1))
    return true

  let n = 0

  for (let i = 0, j = len1; i <= Math.floor(len1 / 2); i++, j--) {
    if (i === j) continue
    if (word1[i] !== word2[i]) n++
    if (word1[j] !== word2[j]) n++
  }

  return n < 2
}
