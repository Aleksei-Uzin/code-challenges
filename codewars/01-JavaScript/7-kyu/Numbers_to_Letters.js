/**
 * Numbers to Letters
 * https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript
 *
 */

const switcher = arr => {
  let res = ''

  arr.forEach(n => {
    if (n === '27') res += '!'
    else if (n === '28') res += '?'
    else if (n === '29') res += ' '
    else res += String.fromCharCode(Math.abs(+n - 26) + 97)
  })

  return res
}
