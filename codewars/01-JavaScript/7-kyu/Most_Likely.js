/**
 * Most Likely
 * https://www.codewars.com/kata/56644a421b7c94c622000056/train/javascript
 *
 */

const mostLikely = (prob1, prob2) => {
  const [num1, denom1] = prob1.split(':').map(Number)
  const [num2, denom2] = prob2.split(':').map(Number)

  return num1 / denom1 > num2 / denom2
}
