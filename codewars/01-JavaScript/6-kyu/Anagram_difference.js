/**
 * Anagram difference
 * https://www.codewars.com/kata/5b1b27c8f60e99a467000041/train/javascript
 *
 */

const anagramDifference = (w1, w2) => {
  const len1 = w1.length
  const len2 = w2.length
  let res = 0

  for (let c of w1) {
    if (w2.includes(c)) {
      w2 = w2.replace(c, '')
      res++
    }
  }

  return len1 + len2 - res * 2
}
