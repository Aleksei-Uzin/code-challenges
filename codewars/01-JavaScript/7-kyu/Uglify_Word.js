/**
 * Uglify Word
 * https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929/train/javascript
 *
 */

const uglifyWord = s => {
  let i = false
  return s.replace(/./g, m => {
    if (/[a-z]/i.test(m)) {
      return (i = !i) ? m.toUpperCase() : m.toLowerCase()
    } else {
      i = false
      return m
    }
  })
}
