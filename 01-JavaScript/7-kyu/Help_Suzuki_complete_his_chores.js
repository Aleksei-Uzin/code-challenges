/**
 * Help Suzuki complete his chores!
 * https://www.codewars.com/kata/584dc1b7766c2bb158000226/train/javascript
 *
 */

const choreAssignment = chores => {
  const sortedChores = chores.sort((a, b) => a - b)
  const len = chores.length
  const res = []

  for (let i = 0; i < len / 2; i++) {
    res[i] = sortedChores[i] + sortedChores[len - i - 1]
  }

  return res.sort((a, b) => a - b)
}
