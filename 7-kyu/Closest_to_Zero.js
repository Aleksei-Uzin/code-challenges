/**
 * Closest to Zero
 * https://www.codewars.com/kata/59887207635904314100007b/train/javascript
 *
 */

const closest = arr => {
  if (arr.includes(0)) return 0

  const range = arr.map(Math.abs)
  const closestVal = arr[range.indexOf(Math.min(...range))]

  return !arr.includes(-closestVal) ? closestVal : null
}
