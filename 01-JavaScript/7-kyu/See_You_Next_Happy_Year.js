/**
 * See You Next Happy Year
 * https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript
 *
 */

const nextHappyYear = year => {
  let set = new Set()

  while (set.size < 4) {
    year++
    set = new Set(year.toString())
  }

  return year
}
