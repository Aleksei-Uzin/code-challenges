/**
 * Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
 * https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
 *
 */

const sumDigPow = (a, b) => {
  const res = []

  while (a < b) {
    const nums = a.toString().split('')
    let pow = 0

    for (let i = 0; i < nums.length; i++) {
      if (pow > a) break
      pow += nums[i] ** (i + 1)
    }

    if (pow === a) res.push(a)
    a++
  }

  return res
}
