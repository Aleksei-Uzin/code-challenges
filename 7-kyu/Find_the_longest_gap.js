/**
 * Find the longest gap!
 * https://www.codewars.com/kata/55b86beb1417eab500000051/train/javascript
 *
 */

const gap = num => {
  const gaps = num.toString(2).match(/0+(?=1)/g)

  return gaps ? Math.max(...gaps.map(gap => gap.length)) : 0
}
