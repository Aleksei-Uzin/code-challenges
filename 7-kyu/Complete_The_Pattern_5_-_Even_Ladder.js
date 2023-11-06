/**
 * Complete The Pattern #5 - Even Ladder
 * https://www.codewars.com/kata/55749101ae1cf7673800003e/train/javascript
 *
 */

const pattern = n => {
  const res = []

  for (let i = 2; i <= n; i += 2) {
    res.push(`${i}`.repeat(i))
  }

  return res.join('\n')
}
