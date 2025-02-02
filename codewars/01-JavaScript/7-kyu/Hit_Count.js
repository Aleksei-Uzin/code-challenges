/**
 * Hit Count
 * https://www.codewars.com/kata/57b6f850a6fdc76523001162/train/javascript
 *
 */

const counterEffect = hitCount => {
  const res = []

  for (let n of hitCount) {
    let arr = Array.from({ length: ++n }).map((_, i) => i)
    res.push(arr)
  }

  return res
}
