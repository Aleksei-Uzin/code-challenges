/**
 * Gravity Flip
 * https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
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
