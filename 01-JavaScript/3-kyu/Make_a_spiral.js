/**
 * Make a spiral
 * https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript
 *
 */

function spiralize(n) {
  const spiral = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  )

  let top = 0
  let bottom = n - 1
  let left = 0
  let right = n - 1

  while (top <= bottom) {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j <= right; j += 1) {
        if (j >= left - 1) {
          spiral[top][j] = 1
        }

        if (right > left && i > top && i < bottom) {
          spiral[i][right] = 1
        }

        if (j >= left) {
          if (top + 1 === bottom && j === Math.floor(n / 2) - 1) {
            continue
          }
          spiral[bottom][j] = 1
        }

        if (i > top + 1 && i < bottom) {
          spiral[i][left] = 1
        }
      }
    }

    top += 2
    right -= 2
    bottom -= 2
    left += 2
  }

  return spiral
}
