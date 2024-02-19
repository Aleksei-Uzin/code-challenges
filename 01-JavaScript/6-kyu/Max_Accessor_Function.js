/**
 * Max Accessor Function
 * https://www.codewars.com/kata/54341ff882b0fdec9c000011/train/javascript
 *
 */

const max = (data, accessor) => {
  let maxRes = -Infinity

  for (let val of data) {
    const res = accessor ? accessor(val) : val

    if (maxRes < res) maxRes = res
  }

  return maxRes
}
