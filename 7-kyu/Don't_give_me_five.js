/**
 * Don't give me five!
 * https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
 *
 */

const dontGiveMeFive = (start, end) => {
  let res = 0

  for (let i = start; i <= end; i++) {
    const str = i.toString()
    if (!str.includes('5')) res++
  }

  return res
}
