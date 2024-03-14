/**
 * Replace every nth
 * https://www.codewars.com/kata/57fcaed83206fb15fd00027a/train/javascript
 *
 */

const replaceNth = (text, n, oldVal, newVal) => {
  let c = 0

  return text.replace(new RegExp(oldVal, 'g'), m => {
    c = (c + 1) % (n + 1) || 1
    return c === n ? newVal : m
  })
}
