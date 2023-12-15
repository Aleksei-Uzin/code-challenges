/**
 * sum2total
 * https://www.codewars.com/kata/559fed8454b12433ff0000a2/train/javascript
 *
 */

const total = arr => {
  if (arr.length === 1) return arr[0]

  const sum = arr.reduce((acc, val, i, nums) => {
    if (nums[i + 1] !== undefined) acc.push(val + nums[i + 1])
    return acc
  }, [])

  return total(sum)
}
