/**
 * Duplicate sandwich
 * https://www.codewars.com/kata/5f8a15c06dbd530016be0c19/train/javascript
 *
 */

const duplicateSandwich = arg => {
  const dupl = [...arg].find((val, i, arr) => arr.lastIndexOf(val) !== i)
  const start = arg.indexOf(dupl) + 1
  const end = arg.lastIndexOf(dupl)

  return arg.slice(start, end)
}
