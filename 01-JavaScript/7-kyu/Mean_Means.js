/**
 * Mean Means
 * https://www.codewars.com/kata/57c6b44f58da9ea6c20003da/train/javascript
 *
 */

const geo_mean = (nums, arith_mean) => {
  const count = nums.length + 1
  const num = nums.reduce((acc, n) => acc - n, arith_mean * count)
  const prod = [...nums, num].reduce((acc, n) => acc * n, 1)

  return prod ** (1 / count)
}
