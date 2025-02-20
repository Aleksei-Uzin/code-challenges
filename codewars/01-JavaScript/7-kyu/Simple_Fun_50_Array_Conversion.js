/**
 * Simple Fun #50: Array Conversion
 * https://www.codewars.com/kata/588854201361435f5e0000bd/train/javascript
 *
 */

const arrayConversion = (arr, op = true) => {
  if (arr.length === 1) return arr[0]

  const newArr = []

  for (let i = 0; i < arr.length; i += 2) {
    const n1 = arr[i]
    const n2 = arr[i + 1]
    const res = op ? n1 + n2 : n1 * n2
    newArr.push(res)
  }

  return arrayConversion(newArr, !op)
}
