/**
 * Coding 3min: Collatz Array(Split or merge)
 * https://www.codewars.com/kata/56fe9d579b7bb6b027000001/train/javascript
 *
 */

const sc = (arr, n) => {
  if (!n) return arr

  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    const c = arr[i]
    newArr = newArr.concat(
      c % 2 ? c * 3 + 1 + (arr[(i += 1)] || 0) : [c / 2, c / 2]
    )
  }

  return sc(newArr, n - 1)
}
