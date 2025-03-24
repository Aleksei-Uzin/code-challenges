/**
 * Lottery machine
 * https://www.codewars.com/kata/5832db03d5bafb7d96000107/train/javascript
 *
 */

const lottery = str => {
  let res = ''

  for (let char of str) {
    if (/\d/.test(char) && !res.includes(char)) res += char
  }

  return res || 'One more run!'
}
