/**
 * Difference between years. (Level 1)
 * https://www.codewars.com/kata/588f5a38ec641b411200005b/train/javascript
 *
 */

const howManyYears = (date1, date2) => {
  const [year1] = date1.split('/')
  const [year2] = date2.split('/')

  return Math.abs(year1 - year2)
}
