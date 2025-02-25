/**
 * Interlace an arbitrary Number of Strings
 * https://www.codewars.com/kata/5836ebe4f7e1c56e1a000033/train/javascript
 *
 */

const combineStrings = (...args) => {
  const max = Math.max(...args.map(s => s.length))
  let res = ''

  for (let i = 0; i < max; i++) {
    for (let j = 0; j < args.length; j++) {
      res += args[j][i] || ''
    }
  }

  return res
}
