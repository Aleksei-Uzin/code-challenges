/**
 * Summarize ranges
 * https://www.codewars.com/kata/55fb6537544ae06ccc0000dc/train/javascript
 *
 */

const summaryRanges = nums => {
  const res = []
  let range = []

  for (let i = 0; i <= nums.length; i++) {
    const len = range.length
    if (range[len - 1] === nums[i]) continue

    if (len === 0) {
      range.push(nums[i])
      continue
    }

    if (nums[i] - range[len - 1] === 1) {
      range.push(nums[i])
    } else {
      res.push(range)
      range = []
      i--
    }
  }

  return res.map(arr => {
    const len = arr.length
    return len > 1 ? `${arr[0]}->${arr[len - 1]}` : `${arr[len - 1]}`
  })
}
