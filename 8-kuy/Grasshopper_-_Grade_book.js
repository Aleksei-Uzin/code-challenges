/**
 * Grasshopper - Grade book
 * https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/55cbd4ba903825f7970000f5/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function getGrade (s1, s2, s3) {
  const scores = Array.of(s1, s2, s3)
  const averageValue = scores.reduce((x, y) => x + y) / scores.length

  if(averageValue >= 90) {
    return 'A'
  }

  if(averageValue >= 80 && averageValue < 90) {
    return 'B'
  }

  if(averageValue >= 70 && averageValue < 80) {
    return 'C'
  }

  if(averageValue >= 60 && averageValue < 70) {
    return 'D'
  }

  return 'F'
}
