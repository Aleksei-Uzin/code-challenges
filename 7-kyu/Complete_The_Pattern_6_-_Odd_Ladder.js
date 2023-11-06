/**
 * Complete The Pattern #6 - Odd Ladder
 * https://www.codewars.com/kata/5574940eae1cf7d520000076/train/javascript
 *
 */

const pattern = n => {
  const res = []

  for (let i = 1; i <= n; i += 2) {
    res.push(`${i}`.repeat(i))
  }

  return res.join('\n')
}
