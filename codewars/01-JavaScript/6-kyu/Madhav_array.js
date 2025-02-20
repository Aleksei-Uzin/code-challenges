/**
 * Madhav array
 * https://www.codewars.com/kata/59b0492f7d3c9d7d4a0000bd/train/javascript
 *
 */

const isMadhavArray = ([sum = 0, ...rest]) => {
  if (!rest.length) return false

  let n = 2
  let j = 0

  while (j < rest.length) {
    let isOutOfArr = false
    let tmpSum = 0

    for (let i = j; i < n + j; i++) {
      if (i in rest) {
        tmpSum += rest[i]
      } else {
        isOutOfArr = true
        break
      }
    }
    if (tmpSum !== sum || isOutOfArr) return false

    j += n
    n += 1
  }

  return true
}
