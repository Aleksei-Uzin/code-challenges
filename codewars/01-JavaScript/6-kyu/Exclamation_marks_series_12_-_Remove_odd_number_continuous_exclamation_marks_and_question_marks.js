/**
 * Exclamation marks series #12: Remove odd number continuous exclamation marks and question marks
 * https://www.codewars.com/kata/57fb0f3f9610ced69000023c/train/javascript
 *
 */

const check = s => {
  const len = s.length
  return !s || len === 1 || len % 2 === 0
}
const remove = str => {
  const a = str.match(/\!*/g) || []
  const b = str.match(/\?*/g) || []
  const isExMarksEven = a.every(check)
  const isQuesMarksEven = b.every(check)

  if (isExMarksEven && isQuesMarksEven) return str

  str = str.replace(/(\?){2,}|(\!){2,}/g, match =>
    match.length % 2 !== 0 ? '' : match
  )

  return remove(str)
}

// Best practice
//
// function remove(s) {
//   let tmp = s.replace(/(!{3,}|\?{3,})/g, (_, x) => (x.length % 2 != 0 ? '' : x))
//   return s == tmp ? s : remove(tmp)
// }
