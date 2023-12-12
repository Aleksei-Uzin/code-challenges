/**
 * Calculate Two People's Individual Ages
 * https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript
 *
 */

const getAges = (sum, diff) => {
  if (diff < 0 || sum < 0) return null

  const age1 = diff + (sum - diff) / 2
  const age2 = sum - age1

  return age1 >= 0 && age2 >= 0 ? [age1, age2] : null
}
