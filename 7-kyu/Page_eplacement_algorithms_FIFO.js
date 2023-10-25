/**
 * Page replacement algorithms: FIFO
 * https://www.codewars.com/kata/62d34faad32b8c002a17d6d9/train/javascript
 *
 */

const fifo = (n, referenceList) => {
  const res = new Array(n).fill(-1)
  let pos = 0

  referenceList.forEach(val => {
    if (!res.includes(val)) {
      res[pos] = val
      pos = ++pos % n
    }
  })

  return res
}
