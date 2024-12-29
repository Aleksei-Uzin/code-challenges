/**
 * Plus - minus - plus - plus - ... - Count
 * https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca/train/javascript
 *
 */

const catchSignChange = arr => {
  let res = 0

  for (let i = 0; i < arr.length; i++) {
    const [a, b] = [arr[i], arr[i + 1]]

    if ((a >= 0 && b < 0) || (b >= 0 && a < 0)) res++
  }

  return res
}
