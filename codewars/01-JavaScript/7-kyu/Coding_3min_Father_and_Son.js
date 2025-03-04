/**
 * Coding 3min: Father and Son
 * https://www.codewars.com/kata/56fe9a0c11086cd842000008/train/javascript
 *
 */

const sc = s => {
  return s.replace(/./g, (m, _, s) => {
    if (/[a-z]/.test(m) && s.indexOf(m.toUpperCase()) >= 0) return m
    else if (/[A-Z]/.test(m) && s.indexOf(m.toLowerCase()) >= 0) return m
    else return ''
  })
}
