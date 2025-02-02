/**
 * Order of weight
 * https://www.codewars.com/kata/59ff4709ba2a14501500003a/train/javascript
 *
 */

const getWeight = w => {
  const [m, val] = w.match(/\d+|\D+/g)
  switch (val) {
    case 'T':
      return m * 1e6
    case 'KG':
      return m * 1e3
    default:
      return m
  }
}
const arrange = arr => arr.sort((a, b) => getWeight(a) - getWeight(b))
