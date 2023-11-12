/**
 * Complete The Pattern #16
 * https://www.codewars.com/kata/55ae997d1c40a199e6000018/train/javascript
 *
 */

const pattern = n => {
  if (n < 1) return ''

  const res = []
  let num = n.toString().slice(-1)
  let line = num.repeat(n)

  for (let i = n - 1; i >= 0; i--) {
    const re = new RegExp('(.{' + i + '})(?=$)')
    res.push(line)
    num = i.toString().slice(-1)
    line = line.replace(re, num.repeat(i))
  }

  return res.join('\n')
}
