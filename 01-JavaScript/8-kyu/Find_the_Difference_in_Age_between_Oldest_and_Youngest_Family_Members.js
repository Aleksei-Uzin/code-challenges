/**
 * Find the Difference in Age between Oldest and Youngest Family Members
 * https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
 *
 */

function differenceInAges(ages) {
  const arr = ages.sort((a, b) => a - b)
  const min = arr[0]
  const max = arr[arr.length - 1]
  
  return [min, max, max - min]  
}
