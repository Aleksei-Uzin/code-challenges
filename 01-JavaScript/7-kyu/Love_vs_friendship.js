/**
 * Love vs friendship
 * https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript
 *
 */

const wordsToMarks = string => {
  let res = 0

  for (let char of string) {
    res += char.charCodeAt(0) % 96
  }

  return res
}
