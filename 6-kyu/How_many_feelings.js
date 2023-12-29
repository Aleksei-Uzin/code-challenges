/**
 * How many feelings?
 * https://www.codewars.com/kata/5a33ec23ee1aaebecf000130/train/javascript
 *
 */

const countFeelings = (str, arr) => {
  let n = 0

  for (let item of arr) {
    let newStr = str

    for (let c of item) {
      newStr = newStr.replace(c, '')
    }

    if (str.length - newStr.length === item.length) n += 1
  }

  return `${n} feeling${n !== 1 ? 's' : ''}.`
}
