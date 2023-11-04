/**
 * Complete The Pattern #7 - Cyclical Permutation
 * https://www.codewars.com/kata/557592fcdfc2220bed000042/train/javascript
 *
 */

const pattern = n => {
  const res = []
  let line = Array.from({ length: n }).reduce((acc, _, i) => acc + (i + 1), '')

  for (let i = 1; i <= n; i++) {
    const re = new RegExp('(\\d{' + i.toString().length + '})(\\d+)')
    res.push(line)
    line = line.replace(re, '$2$1')
  }

  return res.join('\n')
}
