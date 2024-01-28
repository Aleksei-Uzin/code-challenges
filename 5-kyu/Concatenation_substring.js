/**
 * Concatenation substring
 * https://www.codewars.com/kata/5a3c7c151f7f70b19a00006f/train/javascript
 *
 */

const findSubstring = (s, words) => {
  const wordsLen = words[0].length * words.length
  const len = s.length - wordsLen
  const reg = new RegExp(words.join('|'))
  const indStart = s.search(reg)
  const res = []

  if (indStart < 0) return res

  for (let i = indStart; i <= len; i += 1) {
    let part = s.slice(i, i + wordsLen)
    const nextInd = s.slice(i + 1).search(reg)

    for (let word of words) {
      const newPart = part.replace(word, '')
      if (newPart.length < part.length) part = newPart
      else break
    }

    if (!part.length) res.push(i)
    i += nextInd
  }

  return res
}
