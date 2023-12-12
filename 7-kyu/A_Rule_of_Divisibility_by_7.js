/**
 * A Rule of Divisibility by 7
 * https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/javascript
 *
 */

const seven = (m, n = 0) => {
  const str = m.toString()
  const num = +str.slice(0, -1)
  const tail = +str.slice(-1)

  return str.length > 2 ? seven(num - tail * 2, n + 1) : [m, n]
}
