/**
 * Upturn Numeral Triangle
 * https://www.codewars.com/kata/564f3d49a06556d27c000077/train/javascript
 *
 */

const pattern = n => {
  const res = []

  for (let i = 1; i <= n; i++) {
    const line = String(i)
      .slice(-1)
      .repeat(n - i + 1)
      .replace(/\d(?=\d)/g, '$& ')

    res.push(' '.repeat(i) + line)
  }

  return res.join('\n')
}
