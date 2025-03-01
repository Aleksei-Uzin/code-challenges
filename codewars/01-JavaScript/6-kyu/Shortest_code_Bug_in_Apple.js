/**
 * Shortest code: Bug in Apple
 * https://www.codewars.com/kata/56f8a648ba792a778a0000b9/train/javascript
 *
 */

const sc = a =>
  a.reduce(
    (acc, l, i) => ((ind = l.indexOf('B')) >= 0 ? [i, ind] : acc),
    [0, 0]
  )
