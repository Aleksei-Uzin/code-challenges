/**
 * Simple Sequence Validator
 * https://www.codewars.com/kata/553f01db29490a69ff000049/train/javascript
 *
 */

const validateSequence = x => {
  const diff = x[1] - x[0]

  for (let i = 0; i < x.length - 1; i++) {
    if (x[i] + diff !== x[i + 1]) return false
  }

  return true
}
