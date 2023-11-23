/**
 * The First Non Repeated Character In A String
 * https://www.codewars.com/kata/570f6436b29c708a32000826/train/javascript
 *
 */

const firstNonRepeated = str => {
  for (let c of str) {
    if (str.indexOf(c) === str.lastIndexOf(c)) return c
  }

  return null
}
