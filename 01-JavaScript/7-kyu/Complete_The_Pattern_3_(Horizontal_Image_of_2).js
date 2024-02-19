/**
 * Complete The Pattern #3 (Horizontal Image of #2)
 * https://www.codewars.com/kata/557341907fbf439911000022/train/javascript
 *
 */

const pattern = n => {
  let res = ''
  let line = ''

  while (n >= 1) {
    line = line + n
    res += n > 1 ? line + '\n' : line
    n -= 1
  }

  return res
}
