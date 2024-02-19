/**
 * Drawing a Cross!
 * https://www.codewars.com/kata/5a036ecb2b651d696f00007c/train/javascript
 *
 */

const drawACross = n => {
  if (n < 3) return 'Not possible to draw cross for grids less than 3x3!'
  if (n % 2 === 0) return 'Centered cross not possible!'

  const res = []
  let indent = ''
  let middle = ''

  for (let i = 0; i < n; i++) {
    if (i < Math.floor(n / 2)) {
      indent = ' '.repeat(i)
      middle = ' '.repeat(n - 2 - i * 2)

      res.push(`${indent}x${middle}x${indent}`)
    } else if (i > Math.floor(n / 2)) {
      let c = n - i - 1
      indent = ' '.repeat(c)
      middle = ' '.repeat(n - 2 - c * 2)

      res.push(`${indent}x${middle}x${indent}`)
    } else {
      indent = ' '.repeat(Math.ceil((n - 1) / 2))
      res.push(`${indent}x${indent}`)
    }
  }

  return res.join('\n')
}
