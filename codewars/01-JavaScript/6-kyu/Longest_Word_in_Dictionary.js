/**
 * Longest Word in Dictionary
 * https://www.codewars.com/kata/5a003c8c06d5b6bb2a0000b8/train/javascript
 *
 */

const findLongestWord = (str, arr) => {
  let res = ''

  for (let word of arr) {
    let ind = -1

    for (let l of word) {
      if ((ind = str.indexOf(l, ind + 1)) < 0) break
    }

    if (ind > 0) {
      if (res.length === word.length)
        res = res.localeCompare(word) < 0 ? res : word
      if (res.length < word.length) res = word
    }
  }

  return res
}
