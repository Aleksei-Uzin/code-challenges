/**
 * Remove Empty Items of Array
 * https://www.codewars.com/kata/5c857bab20089d4fe65a7f5b/train/javascript
 *
 */

const clean = arr => {
  const res = []

  for (let item in arr) {
    res.push(arr[item])
  }

  return res
}
