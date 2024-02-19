/**
 * Complete The Pattern #1
 * https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript
 *
 */

const pattern = n => {
  if (n < 1) return ''

  let output = []

  for (let i = 1; i <= n; i++) {
    output.push(i.toString().repeat(i))
  }

  return output.join('\n')
}
