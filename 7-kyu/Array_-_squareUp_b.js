/**
 * Array - squareUp b!
 * https://www.codewars.com/kata/5a8bcd980025e99381000099/train/javascript
 *
 */

const squareUp = n => {
  const res = []

  for (let i = 1; i <= n; i++) {
    const sequence = Array(n).fill(0)

    for (let k = n - i, j = i; k < n; k++, j--) {
      sequence[k] = j
    }

    res.push(...sequence)
  }

  return res
}
