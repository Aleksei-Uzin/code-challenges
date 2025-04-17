/**
 * Last Survivors Ep.3
 * https://www.codewars.com/kata/60a2d7f50eee95000d34f414/train/javascript
 *
 */

const lastSurvivors = (strs, nums) => {
  const strsLen = strs.length

  for (let i = strsLen - 1; i >= 0; i--) {
    const str = strs[i]

    strs[i] = str.replace(/\S/g, (m, j) => {
      if (nums[j] > 0) {
        nums[j] -= 1
        return ' '
      } else {
        return m
      }
    })
  }

  return strs.join('').replace(/\s/g, '')
}
