/**
 * Mirror, mirror, on the wall...
 * https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript
 *
 */

const mirror = data => {
  const sorted = [...data].sort((a, b) => a - b)
  const len = data.length
  const newLen = len * 2 - 1
  const res = Array.from(
    { length: newLen },
    (_, i) => sorted[i] ?? sorted[len - (i - len) - 2]
  )

  return res
}
