/**
 * Gravity Flip
 * https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/5f70c883e10f9e0001c89673/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

const flip=(d, a) => {
  const isLeft = d !== 'L'

  return (
    isLeft
    ? a.sort((a, b) => a - b)
    : a.sort((a, b) => b - a)
  )
}
