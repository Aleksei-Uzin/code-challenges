/**
 * Average Array
 * https://www.codewars.com/kata/596f6385e7cd727fff0000d6/train/javascript
 *
 */

const avgArray = arr => {
  const len = arr.length
  const res = []

  for (let i = 0; i < arr[0].length; i++) {
    let sum = 0

    for (let j = 0; j < len; j++) {
      sum += arr[j][i]
    }

    res.push(sum / len)
  }

  return res
}
