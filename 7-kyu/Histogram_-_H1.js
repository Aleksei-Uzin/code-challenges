/**
 * Histogram - H1
 * https://www.codewars.com/kata/57d532d2164a67cded0001c7/train/javascript
 *
 */

const histogram = results => {
  let res = ''

  for (let i = 6; i > 0; i--) {
    const amount = results[i - 1]
    const t = amount ? `${'#'.repeat(amount)} ${amount}` : ''
    res += `${i}|${t}\n`
  }

  return res
}
