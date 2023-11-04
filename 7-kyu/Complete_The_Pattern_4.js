/**
 * Complete The Pattern #4
 * https://www.codewars.com/kata/55736129f78b30311300010f/train/javascript
 *
 */

const pattern = n => {
  const res = []
  let line = Array.from({ length: n }).reduce((acc, _, i) => acc + (i + 1), '')

  for (let i = 1; line.length >= n.toString().length; i++) {
    res.push(line)
    line = line.slice(i.toString().length)
  }

  return res.join('\n')
}
