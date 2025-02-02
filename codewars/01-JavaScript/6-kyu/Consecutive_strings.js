/**
 * Consecutive strings
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
 *
 */

const longestConsec = (strarr, k) => {
  const res = []

  for(let i = 0; i <= strarr.length - k; i++) {
    let str = '', n = i
    while(n < (i + k)) {
      str += strarr[n]
      n++
    }
    res.push(str)
  }

  return res.reduce((acc, val) => val.length > acc.length ? val : acc, '')
}
