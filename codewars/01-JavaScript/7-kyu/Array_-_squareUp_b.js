/**
 * Array - squareUp b!
 * https://www.codewars.com/kata/5a8bcd980025e99381000099/train/javascript
 *
 */

const squareUp = n => {
  let k = 1

  return [...Array(n * n)].map((_, i) => {
    const res = n - (i % n)

    if (res === k) k++

    return res <= k ? res : 0
  })
}
