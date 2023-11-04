/**
 * Valid string
 * https://www.codewars.com/kata/52f3bb2095d6bfeac2002196/train/javascript
 *
 */

const validWord = (dictionary, word) =>
  new RegExp(`^(?:${dictionary.join('|')})+$`).test(word)
