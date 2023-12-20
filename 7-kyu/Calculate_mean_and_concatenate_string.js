/**
 * Calculate mean and concatenate string
 * https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript
 *
 */

const mean = lst => {
  const [sum, str] = lst.reduce(
    (arr, val) => (
      /\d/.test(val) ? (arr[0] += parseInt(val)) : (arr[1] += val), arr
    ),
    [0, '']
  )

  return [sum / 10, str]
}
