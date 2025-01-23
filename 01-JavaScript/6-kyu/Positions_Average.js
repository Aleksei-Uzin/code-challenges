/**
 * Positions Average
 * https://www.codewars.com/kata/59f4a0acbee84576800000af/train/javascript
 *
 */

const posAverage = s => {
  const arr = s.split(/\D+/)
  let sum = 0
  let n = 0

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      ;[...arr[i]].forEach((val, ind) => {
        val === arr[j][ind] ? sum++ : n++
      })
    }
  }

  return (sum / (sum + n)) * 100
}
