/**
 * Quarter of the year
 * https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

const quarterOf = (month) => {
  const year = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ]
  const quarters = year.map(quarter => quarter.indexOf(month))
  const quarter = quarters.findIndex(index => index !== -1) + 1

  return quarter
}
