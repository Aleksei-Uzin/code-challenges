/**
 * Simple Fun #320: Scratch lottery I
 * https://www.codewars.com/kata/594a1822a2db9e93bd0001d4/train/javascript
 *
 */

const scratch = lottery => {
  let res = 0

  for (let val of lottery) {
    if (/(\w+\s)\1{2}/.test(val)) res += +val.match(/\d+/)[0]
  }

  return res
}
