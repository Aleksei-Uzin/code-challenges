/**
 * Computer problem series #1: Fill the Hard Disk Drive
 * https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/javascript
 *
 */

const save = (sizes, hd) => {
  let res = 0

  for (let item of sizes) {
    if ((hd -= item) < 0) break
    res += 1
  }

  return res
}
