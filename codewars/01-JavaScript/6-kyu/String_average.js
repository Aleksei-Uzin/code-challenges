/**
 * String average
 * https://www.codewars.com/kata/5966847f4025872c7d00015b/train/javascript
 *
 */

const averageString = str => {
  const nums = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  const arr = str.split(' ')
  const len = arr.length
  let sum = 0

  for (let i = 0; i < len; i++) {
    const n = nums.indexOf(arr[i])

    if (n !== -1) sum += n
    else return 'n/a'
  }

  return nums[~~(sum / len)]
}
