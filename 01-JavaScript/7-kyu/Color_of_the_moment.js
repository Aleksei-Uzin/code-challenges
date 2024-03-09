/**
 * Color of the moment
 * https://www.codewars.com/kata/55f416b2019f552cb0000086/train/javascript
 *
 */

const hexToTime = hexCode => {
  if (!/#(0[a-f\d]|1[0-7])([0-2][a-f\d]|3[ab\d]){2}/.test(hexCode))
    throw Error('Thats not a valid time!')

  return hexCode
    .match(/(\w\w)/g)
    .map(n => `${parseInt(n, 16)}`.padStart(2, 0))
    .join(':')
}
