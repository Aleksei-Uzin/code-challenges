/**
 * What's up next?
 * https://www.codewars.com/kata/542ebbdb494db239f8000046/train/javascript
 *
 */

const nextItem = (xs, item) => {
  let isNext = false

  for (let val of xs) {
    if (isNext) return val
    if (val === item) isNext = true
  }

  return undefined
}
