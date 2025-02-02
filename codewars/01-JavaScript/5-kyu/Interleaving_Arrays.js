/**
 * Interleaving Arrays
 * https://www.codewars.com/kata/523d2e964680d1f749000135/train/javascript
 *
 */

const interleave = (...args) => {
  const maxLen = Math.max(...args.map(a => a.length))
  const res = []

  for (let i = 0; i < maxLen; i++) {
    for (let j = 0; j < args.length; j++) {
      res.push(args[j][i] ?? null)
    }
  }

  return res
}
