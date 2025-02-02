/**
 * The most common letter
 * https://www.codewars.com/kata/5a434a9dc5e284724f000011/train/javascript
 *
 */

const replaceCommon = (str, letter) => {
  const obj = {}

  for (let l of str) {
    if (/[a-z]/.test(l)) {
      if (!obj[l]) obj[l] = 1
      else obj[l] += 1
    }
  }

  const arr = Object.entries(obj)
  const maxN = Math.max(...arr.map(([_, n]) => n))
  const maxRes = arr.filter(([_, n]) => n === maxN)
  let minInd = str.length

  for (let [l] of maxRes) {
    const ind = str.indexOf(l)
    if (ind < minInd) minInd = ind
  }

  return str.replace(new RegExp(str[minInd], 'g'), letter)
}
