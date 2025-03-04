/**
 * Coding 3min : Max Value
 * https://www.codewars.com/kata/570771871df89cf59b000742/train/javascript
 *
 */

const sc = arr => {
  let max = -Infinity

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const n = arr[i]
      const m = arr[j]

      if (i - j) max = Math.max(max, n + m, n - m, n * m, m && n / m)
    }
  }

  return max
}
