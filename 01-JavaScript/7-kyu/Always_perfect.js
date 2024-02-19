/**
 * Always perfect
 * https://www.codewars.com/kata/55f3facb78a9fd5b26000036/train/javascript
 *
 */

const checkRoot = str => {
  if (!/^(\d+\,){3}\d+$/.test(str) || /(\b0)/.test(str))
    return 'incorrect input'

  const arr = str.split(',').map(Number)
  const isConsecutive = arr.reduce(
    (acc, val, i, arr) => (!acc ? acc : arr[0] + i === val),
    true
  )

  if (!isConsecutive) return 'not consecutive'

  const res = arr.reduce((acc, n) => (acc *= n))

  return `${res + 1}, ${Math.sqrt(res + 1)}`
}
