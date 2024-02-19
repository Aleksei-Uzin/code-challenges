/**
 * NLP-Series #1 - Inverted Index
 * https://www.codewars.com/kata/5af823451839f1768f00009d/train/javascript
 *
 */

const buildInvertedIndex = (collection, term, caseSensitive, exactMatch) => {
  const flag = caseSensitive ? '' : 'i'
  const str = exactMatch ? `\\W*\\b${term}\\b\\W*` : `\\w*${term}\\w*`
  const res = []

  collection.forEach((val, i) => {
    if (new RegExp(str, flag).test(val)) res.push(i + 1)
  })

  return res
}
