/**
 * How many are smaller than me?
 * https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
 *
 */

const smaller = nums => {
  const len = nums.length

  for (let i = 0; i < len; i++) {
    const n = nums[i]
    nums[i] = 0

    for (let j = i + 1; j < len; j++) {
      if (n > nums[j]) nums[i] += 1
    }
  }

  return nums
}
