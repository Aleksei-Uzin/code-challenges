/**
 * Complete The Pattern #10 - Parallelogram
 * https://www.codewars.com/kata/5581a7651185fe13190000ee/train/javascript
 *
 */

const pattern = n => {
  const line = Array.from({ length: n }).reduce(
    (acc, _, i) => (acc += (i + 1) % 10),
    ''
  )
  let res = []

  for (let i = 0; i < n; i++) {
    res.push(`${' '.repeat(n - 1 - i)}${line}${' '.repeat(i)}`)
  }

  return res.join('\n')
}
