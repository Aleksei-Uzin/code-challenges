/**
 * char_to_ascii
 * https://www.codewars.com/kata/55e9529cbdc3b29d8c000016/train/javascript
 *
 */

const charToAscii = str => {
  const obj = {}

  for (let char of str) {
    if (/[a-z]/i.test(char) && !obj[char]) obj[char] = char.charCodeAt(0)
  }

  return str ? obj : null
}
