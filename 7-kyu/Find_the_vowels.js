/**
 * Find the vowels
 * https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
 *
 */

const vowelIndices = word => {
  const regexp = /[aeiouy]/gi
  const res = []
  let match

  while((match = regexp.exec(word)) !== null) {
    res.push(match.index + 1)
  }

  return res
}
