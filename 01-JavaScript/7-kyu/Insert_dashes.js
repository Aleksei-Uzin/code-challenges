/**
 * Insert dashes
 * https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript
 *
 */

const insertDash = num => {
  const isOdd = (n1, n2) => (n1 % 2) > 0 && (n2 % 2) > 0
  const arrNum = num.toString().split('')

  const result = arrNum.map((x, i, arr) => isOdd(x, arr[i + 1]) ? `${x}-` : x)

  return result.join('')
}
