/**
 * Expressions Matter 
 * https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
 *
 */

const expressionMatter = (a, b, c) => {
  const res1 = a + b + c
  const res2 = a * b * c
  const res3 = (a + b) * c
  const res4 = a * (b + c)


  return Math.max(res1, res2, res3, res4)
}
