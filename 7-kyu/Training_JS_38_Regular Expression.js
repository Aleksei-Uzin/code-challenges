/**
 * Training JS #38: Regular Expression--"^","$", "." and test()
 * https://www.codewars.com/kata/573975d3ac3eec695b0013e0/train/javascript
 *
 */

const findSimilarity = (str, word) => {
  const regStr = word
    .replace(/./g, '.')
    .replace(/^./, word[0])
    .replace(/.$/, word.slice(-1))
  const reg = new RegExp(`^${regStr}$`)

  return str
    .split(/ /)
    .filter(val => reg.test(val))
    .join(' ')
}
