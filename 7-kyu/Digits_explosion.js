/**
 * Digits explosion
 * https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript
 *
 */

const explode = str => {
  let res = ''

  for (let n of str) {
    res += n.repeat(n)
  }

  return res
}
