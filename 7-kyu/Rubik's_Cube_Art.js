/**
 * Rubik's Cube Art
 * https://www.codewars.com/kata/6387ea2cf418c41d277f3ffa/train/javascript
 *
 */

const cube = n => {
  const res = []
  const size = n * 2

  for (let i = 1; i <= size; i++) {
    if (i <= n) {
      res.push(' '.repeat(n - i) + '/\\'.repeat(i) + '_\\'.repeat(n))
    } else {
      res.push(
        ' '.repeat(i - n - 1) + '\\/'.repeat(size - i + 1) + '_/'.repeat(n)
      )
    }
  }

  return res.join('\n')
}
