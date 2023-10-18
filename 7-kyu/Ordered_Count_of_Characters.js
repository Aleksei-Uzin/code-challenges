/**
 * Ordered Count of Characters
 * https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript
 *
 */

const orderedCount = text => {
  const res = []

  for (let c of text) {
    const index = res.findIndex(val => val.includes(c))

    if (index >= 0) {
      let [a, b] = res[index]
      res[index] = [a, b + 1]
    } else {
      res.push([c, 1])
    }
  }

  return res
}
