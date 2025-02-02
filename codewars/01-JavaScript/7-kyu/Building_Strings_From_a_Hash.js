/**
 * Building Strings From a Hash
 * https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript
 *
 */

const solution = pairs => {
  const res = []

  Object.keys(pairs).forEach(key => {
    res.push(`${key} = ${pairs[key]}`)
  })

  return res.join(',')
}
