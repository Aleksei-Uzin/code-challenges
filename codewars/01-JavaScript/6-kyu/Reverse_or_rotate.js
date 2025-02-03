/**
 * Reverse or rotate?
 * https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript
 *
 */

const revrot = (str, sz) => {
  const reg = new RegExp(`\\d{${sz}}`, 'g')
  const chunks = str.match(reg) || []
  let res = ''

  for (let chunk of chunks) {
    const nums = [...chunk]
    const sum = nums.reduce((acc, n) => acc + parseInt(n), 0)

    if (sum % 2 === 0) {
      res += nums.reverse().join('')
    } else {
      res += chunk.replace(/^(\d)(\d*)$/, '$2$1')
    }
  }

  return res
}
