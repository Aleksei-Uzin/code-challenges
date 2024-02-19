/**
 * Frequency sequence
 * https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/javascript
 *
 */

const freqSeq = (str, sep) => {
  const obj = {}

  for (let val of str) {
    if (!obj[val]) obj[val] = 1
    else obj[val] += 1
  }

  return str.replace(/./g, match => `${obj[match]}${sep}`).slice(0, -1)
}
