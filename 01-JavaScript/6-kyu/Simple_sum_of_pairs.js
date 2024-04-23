/**
 * Simple sum of pairs
 * https://www.codewars.com/kata/5bc027fccd4ec86c840000b7/train/javascript
 *
 */

const solve = n => {
  const a = `${n}`.slice(1).replace(/\d/g, '9')
  const b = n - a
  const str = `${a}${b}`
  const res = [...str].reduce((acc, n) => +n + acc, 0)

  return res
}
