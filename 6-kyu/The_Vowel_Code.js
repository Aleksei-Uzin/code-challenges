/**
 * The Vowel Code
 * https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
 *
 */

const vowels = ['a', 'e', 'i', 'o', 'u']

const encode = (string, res = '') => {
  for (let char of string) {
    const index = vowels.indexOf(char.toLowerCase())
    res += index > -1 ? index + 1 : char
  }

  return res
}
const decode = (string, res = '') => {
  for (let char of string) {
    res += /\d/.test(char) ? vowels[char - 1] : char
  }

  return res
}
