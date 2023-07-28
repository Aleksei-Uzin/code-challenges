/**
 * Unary function chainer
 * https://www.codewars.com/kata/54ca3e777120b56cb6000710/train/javascript
 *
 */

const chained =
  funcs =>
  value =>
    funcs.reduce((acc, fn) => fn(acc), value)
