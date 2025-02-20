/**
 * Zeros and Ones
 * https://www.codewars.com/kata/5a00a8b5ffe75f8888000080/train/javascript
 *
 */

const replaceZero = arr => {
  let zero = false
  let onesAfterZero = 0
  let sum = 0
  let lastSum = 0
  let lastInd = 0
  let ind = 0

  for (let i = 0; i <= arr.length; i++) {
    const val = arr[i] || 0

    if (val === 1) {
      lastSum += 1
      zero ? onesAfterZero++ : onesAfterZero
    } else if (!zero && val === 0) {
      zero = true
      lastSum += 1
      lastInd = i
    } else if (zero && val === 0) {
      if (sum <= lastSum) {
        sum = lastSum
        ind = lastInd
      }

      lastSum = onesAfterZero + 1
      onesAfterZero = 0
      lastInd = i
    } else {
      zero = false
      onesAfterZero = 0
      sum = 0
      lastSum = 0
    }
  }

  return ind
}
