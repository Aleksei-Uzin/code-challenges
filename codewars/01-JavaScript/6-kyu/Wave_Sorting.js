/**
 * Wave Sorting
 * https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/train/javascript
 *s
 */

const waveSort = arr => {
  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length - 1; i += 2) {
    ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
}
