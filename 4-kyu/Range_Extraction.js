/**
 * Range Extraction
 * https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
 *
 */

const solution = list => {
  const res = []
  let range = []

  for (let i = 0; i <= list.length; i++) {
    const len = range.length
    if (range[len - 1] === list[i]) continue

    if (len === 0) {
      range.push(list[i])
      continue
    }

    if (list[i] - range[len - 1] === 1) {
      range.push(list[i])
    } else {
      if (len < 3) res.push(...range)
      else res.push(range)

      range = []
      i--
    }
  }

  return res
    .map(val => {
      if (typeof val === 'number') return `${val}`
      const len = val.length
      return len > 1 ? `${val[0]}-${val[len - 1]}` : `${val[len - 1]}`
    })
    .join()
}
