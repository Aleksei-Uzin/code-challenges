/**
 * Coding 3min : Reading a Book
 * https://www.codewars.com/kata/570ca6a520c69f39dd0016d4/train/javascript
 *
 */

const sc = words => {
  const set = new Set()
  const match =
    words
      .toLowerCase()
      .replace(/['./\(]/g, '')
      .match(/[a-z]+/g) || []

  return match.reduce((acc, word) => {
    if (set.has(word)) {
      return acc + 1
    } else {
      set.add(word)
      return acc + word.length
    }
  }, 0)
}
