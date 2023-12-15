/**
 * The Lazy Startup Office
 * https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1/train/javascript
 *
 */

const binRota = arr => {
  return arr.reduce(
    (acc, val, i) => (
      i % 2 === 0 ? acc.push(...val) : acc.push(...val.reverse()), acc
    ),
    []
  )
}
