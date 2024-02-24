/**
 * Next bigger number with the same digits
 * https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
 *
 */

const nextBigger = n => {
  const str = n.toString()
  const arr = str.split('').sort((a, b) => b - a)

  return n === +arr.join('') ? -1 : getBigger(str)
}
const getBigger = (str, n = 2) => {
  const len = str.length
  const isLast = len - n === 0
  const arr = isLast ? str.split('') : str.slice(len - n).split('')
  const nextDigit = isLast ? str[0] : str[len - n]
  const index = arr.sort((a, b) => a - b).findIndex(val => val > nextDigit)

  if (index >= 0) {
    const start = isLast ? '' : str.slice(0, len - n)
    const nextMaxDigit = arr[index]
    arr.splice(index, 1)

    return +(start + nextMaxDigit + arr.join(''))
  }

  return getBigger(str, n + 1)
}
