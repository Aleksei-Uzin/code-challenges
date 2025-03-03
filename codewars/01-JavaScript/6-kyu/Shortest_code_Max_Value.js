/**
 * Shortest code: Max Value
 * https://www.codewars.com/kata/57075f6d4f2c293f0c0014be/train/javascript
 *
 */

const sc = a => {
  let b = -1 / 0

  a.forEach((n, i) => {
    a.forEach((m, j) => {
      if (i - j) b = Math.max(b, n + m, n - m, n * m, m && n / m)
    })
  })

  return b
}

const scSecond = a =>
  a.reduce((b, n, i) => {
    for (let j = i; j < a.length - 1; j++) {
      let m = a[j + 1]
      b = Math.max(
        b,
        n + m,
        n - m,
        n * m,
        m && n / m,
        m + n,
        m - n,
        m * n,
        n && m / n
      )
    }

    return b
  }, -1 / 0)
