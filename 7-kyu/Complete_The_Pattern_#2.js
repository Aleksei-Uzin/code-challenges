/**
 * Complete The Pattern #2
 * https://www.codewars.com/kata/55733d3ef7c43f8b0700007c/train/javascript
 *
 */

const pattern = n => {
  let line = ''
  let res = ''

  while (n > 0) {
    line = line + n
    res = `${line}${res ? '\n' : ''}${res}`
    n--
  }

  return res
}
