/**
 * Unflatten a list (Easy)
 * https://www.codewars.com/kata/57e2dd0bec7d247e5600013a/train/javascript
 *
 */

const unflatten = flatArr => {
  const len = flatArr.length
  const unflateArr = []

  for (let i = 0; i < len; i++) {
    const n = flatArr[i]

    if (n < 3) {
      unflateArr.push(n)
    } else {
      const subArr = []

      for (let j = 0; j < n; j++) {
        if (i + j < len) {
          subArr.push(flatArr[i + j])
        }
      }

      unflateArr.push(subArr)
      i += n - 1
    }
  }

  return unflateArr
}
