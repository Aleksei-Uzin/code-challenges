/**
 * Find the smallest
 * https://www.codewars.com/kata/573992c724fc289553000e95/train/javascript
 *
 */

const smallest = n => {
  const numStr = n.toString()
  let res = [n, 0, 0]
  let smallestNum = n

  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i]
    const withoutDigit = numStr.slice(0, i) + numStr.slice(i + 1)

    for (let j = 0; j <= withoutDigit.length; j++) {
      const newNumStr = withoutDigit.slice(0, j) + digit + withoutDigit.slice(j)
      const newNum = parseInt(newNumStr, 10)

      if (newNum < smallestNum) {
        smallestNum = newNum
        res = [smallestNum, i, j]
      }
    }
  }

  return res
}
